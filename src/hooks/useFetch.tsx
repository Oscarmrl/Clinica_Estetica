import { useState, useEffect } from "react";
import type { endpoit } from "../types";

export default function useFetch<T>({ url }: endpoit) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    if (!url) return; // 🔒 evita llamada si no hay URL válida
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data);
        } else {
          setData([]);
        }
      })
      .catch((error) => console.log("Error al obtener tratamientos:", error));
  }, [url]);

  return data;
}
