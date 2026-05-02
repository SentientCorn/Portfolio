import { useEffect, useState } from "react";

const TTL = 1000 * 60 * 60 * 2; // 2 hours

export function useGithubGraphQL(username, enabled = true) {
  const [data, setData] = useState({
    user: null,
    stats: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!enabled) {
      setData({ user: null, stats: null });
      setError(null);
      setLoading(false);
      return;
    }

    if (!username) {
      setError(new Error("Username required"));
      setLoading(false);
      return;
    }

    const CACHE_KEY = `kornfolio_githubql_cache`;

    // Check cache
    try {
      const cache = localStorage.getItem(CACHE_KEY);

      if (cache) {
        const parsed = JSON.parse(cache);

        if (Date.now() - parsed.timestamp < TTL) {
          setData(parsed.data);
          setLoading(false);
          return;
        } else {
          localStorage.removeItem(CACHE_KEY);
        }
      }
    } catch (e) {
      console.warn("Cache error:", e);
    }

    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const res = await fetch(`/api/github?username=${username}`);
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error || "Failed to fetch GitHub data");
        }

        setData(json);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: Date.now(),
            data: json,
          }),
        );
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username, enabled]);

  return { data, loading, error };
}
