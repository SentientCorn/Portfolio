import { useEffect, useState } from "react";

export function useGithub(username) {
  // Object with both user and repo data
  const [data, setData] = useState({
    user: null,
    repos: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (!username) {
      setError(new Error("Username needed"));
      setData({ user: null, repos: [] });
      setLoading(false);
      return;
    }

    setError(null);
    setData({ user: null, repos: [] });
    setLoading(true);

    async function fetchData() {
      try {
        // Calls multiple endpoints at the same time
        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=stars&per_page=5`,
          ),
        ]);

        if (!userRes.ok) throw new Error("User not found");
        if (!repoRes.ok) throw new Error("Repos not found");

        const user = await userRes.json();
        const repos = await repoRes.json();

        setData({ user, repos });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    // Request debounce
    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    // Clear timer
    return () => clearTimeout(timer);
  }, [username]);

  return { data, loading, error };
}
