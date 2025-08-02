import { useState, useEffect, useCallback } from "react";
import type { endpoit } from "../types";

export default function useFetch<T>({ url }: endpoit) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      const json = await response.json();

      if (Array.isArray(json)) {
        setData(json);
      } else {
        setData([]);
      }
    } catch (err) {
      console.error("Error al obtener datos:", err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
