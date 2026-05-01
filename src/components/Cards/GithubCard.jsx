import { useGithub } from "../../hooks/useGithub";

export default function GithubCard({ username }) {
  const { data, loading, error } = useGithub(username);

  if (error) return <p>{error.message}</p>;

  if (loading || !data.user) return <p>Loading...</p>;

  const { user, repos } = data;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          {user.login}
        </a>
      </p>
      <p>Public repos: {user.public_repos}</p>
    </div>
  );
}
