import { useState, useEffect } from "react";
import type { endpoit } from "../types";

export default function useFetch<T>({ url }: endpoit) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))

      .catch((error) => console.log("Error al obtener tratamientos:", error));
  }, [url]);

  return data;
}
