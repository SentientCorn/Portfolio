export default function GithubCard() {
  return (
    <div className="bg-base-300 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">GitHub Profile</h3>
      <p className="text-base-text mb-4">Check out my GitHub profile for my latest projects and contributions.</p>
      <a href="https://github.com/radityaryan" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        View Profile
      </a>
    </div>
  );
}