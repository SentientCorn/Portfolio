export default function handler(req, res) {
  const PAT = process.env.GITHUB_PAT;
  const { username } = req.query;

  if (!PAT) {
    res.status(500).json({ error: "GitHub PAT not configured" });
    return;
  } else if (!username) {
    res.status(400).json({ error: "Username is required" });
    return;
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        name
        login
        avatarUrl
        url
        followers {
          totalCount
        }
        following {
          totalCount
        }
        repositories {
          totalCount
        }
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
        }
        pullRequests(states: MERGED) {
          totalCount
        }
        repositoriesContributedTo {
          totalCount
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { login: username },
      }),
    });

    const json = await response.json();

    if (json.errors) {
      return res.status(500).json({ error: json.errors[0].message });
    } 

    
    const u = json.data.user;

    const formatted = {
      user: {
        name: u.name,
        login: u.login,
        avatar_url: u.avatarUrl,
        html_url: u.url,
        followers: u.followers.totalCount,
        following: u.following.totalCount,
        public_repos: u.repositories.totalCount,
      },
      stats: {
        commits: u.contributionsCollection.totalCommitContributions,
        pullRequests:
          u.contributionsCollection.totalPullRequestContributions,
        mergedPullRequests: u.pullRequests.totalCount,
        reviews:
          u.contributionsCollection.totalPullRequestReviewContributions,
        contributedRepos: u.repositoriesContributedTo.totalCount,
      },
    };

    res.setHeader(
      "Cache-Control",
      "s-maxage=300, stale-while-revalidate=600"
    );

    res.status(200).json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}