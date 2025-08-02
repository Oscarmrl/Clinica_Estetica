import { useState } from "react";

export default function useMutation<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const mutate = async (
    url: string,
    method: string,
    body?: Record<string, unknown>
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      const result = await response.json();
      setData(result);
      setLoading(false);
      return result;
    } catch (error) {
      setError(error as Error);
      setLoading(false);
      throw error;
    }
  };

  return { mutate, loading, error, data };
}
