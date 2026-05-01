import { useGithub } from "../../hooks/useGithub";
import GitHubLogo from "../../assets/GitHub_Lockup_White_Clearspace.svg";

export default function GithubCard({ username }) {
  const { data, loading, error } = useGithub(username);

  if (error) return <p>{error.message}</p>;

  if (loading || !data.user) return <p>Loading...</p>;

  const { user, repos } = data;

  return (
    <div className="bg-[#232925] text-[#FFFFFF] rounded-lg shadow-lg overflow-hidden">
      {/* Github Banner */}
      <div className="bg-[#101411] h-12 flex items-center justify-center">
        <img src={GitHubLogo} alt="GitHub Logo" className="h-6" />
      </div>

      <div className="p-4 flex items-center gap-4">
        {/* Profile Block */}
        <div className="flex items-center shrink-0">
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
        <div className="flex gap-2 flex-1">
          <div className="bg-[#101411] px-2 py-1 rounded text-center flex-1">
            <div className="text-xs text-gray-400">Followers</div>
            <div className="text-lg font-bold">{user.followers}</div>
          </div>

          <div className="bg-[#101411] px-2 py-1 rounded text-center flex-1">
            <div className="text-xs text-gray-400">Following</div>
            <div className="text-lg font-bold">{user.following}</div>
          </div>

          <div className="bg-[#101411] px-2 py-1 rounded text-center flex-1">
            <div className="text-xs text-gray-400">Repos</div>
            <div className="text-lg font-bold">{user.public_repos}</div>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="bg-[#101411] px-2 py-1 rounded flex items-center justify-center hover:bg-[#353d35] flex-1 text-xs text-gray-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
