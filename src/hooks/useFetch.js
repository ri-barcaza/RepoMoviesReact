import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [loading, setloading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResult(json);
        setloading(false);
      } catch (error) {
        setError(error);
        setloading(false);
      }
    })();
  }, [options, url]);

  return { loading, result, error };
}
