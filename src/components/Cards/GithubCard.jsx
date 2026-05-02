import { useGithubREST } from "../../hooks/useGithubREST";
import { useGithubGraphQL } from "../../hooks/useGithubGraphql";
import GitHubLogo from "../../assets/GitHub_Lockup_White_Clearspace.svg";
import GithubStat from "./GithubStat";
import { useState } from "react";

export default function GithubCard({ username }) {
  const [showAdvancedStats, setShowAdvancedStats] = useState(false);
  const { data, loading, error } = useGithubREST(username);
  const {
    data: graphQLData,
    loading: graphQLLoading,
    error: graphQLError,
  } = useGithubGraphQL(username, showAdvancedStats);

  if (error) return <p>{error.message}</p>;

  if (loading || !data.user) return <p>Loading...</p>;

  const { user } = data;
  const stats = graphQLData?.stats;

  return (
    <div className="bg-[#232925] text-[#FFFFFF] rounded-lg shadow-lg overflow-hidden">
      {/* Github Banner */}
      <div className="bg-[#101411] h-12 relative flex items-center justify-center">
        <img src={GitHubLogo} alt="GitHub Logo" className="h-6" />
        <label className="inline-flex items-center gap-2 text-xs text-gray-300 absolute right-3">
          <input
            type="checkbox"
            checked={showAdvancedStats}
            onChange={(e) => setShowAdvancedStats(e.target.checked)}
            className="accent-[#353d35]"
          />
          Show advanced stats
        </label>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          {/* Profile Block */}
          <div className="flex items-center shrink-0 md:w-56">
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3 flex flex-col">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-400 hover:text-gray-300"
              >
                @{user.login}
              </a>
            </div>
          </div>

          {/* Stats Block */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 flex-1">
            {showAdvancedStats ? (
              <>
                <GithubStat
                  label="Followers"
                  value={user.followers}
                  className="min-w-0"
                />
                <GithubStat
                  label="Repos"
                  value={user.public_repos}
                  className="min-w-0"
                />
                <GithubStat
                  label="Commits"
                  value={graphQLLoading ? "..." : (stats?.commits ?? "-")}
                  className="min-w-0"
                />
                <GithubStat
                  label="PRs"
                  value={graphQLLoading ? "..." : (stats?.pullRequests ?? "-")}
                  className="min-w-0"
                />
                <GithubStat
                  label="Merged"
                  value={
                    graphQLLoading ? "..." : (stats?.mergedPullRequests ?? "-")
                  }
                  className="min-w-0"
                />
                <GithubStat
                  label="Contrib"
                  value={
                    graphQLLoading ? "..." : (stats?.contributedRepos ?? "-")
                  }
                  className="min-w-0"
                />
              </>
            ) : (
              <>
                <GithubStat
                  label="Followers"
                  value={user.followers}
                  className="min-w-0"
                />
                <GithubStat
                  label="Following"
                  value={user.following}
                  className="min-w-0"
                />
                <GithubStat
                  label="Repos"
                  value={user.public_repos}
                  className="min-w-0"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
