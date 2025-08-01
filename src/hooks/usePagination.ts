import { useState } from "react";

export default function usePagination<T>(items: T[], itemsPorPagi: number = 6) {
  const [paginacion, setPaginacion] = useState(1);

  const totalPaginas = Math.ceil(items.length / itemsPorPagi);
  const start = (paginacion - 1) * itemsPorPagi;
  const paginatedItems = items.slice(start, start + itemsPorPagi);

  const proximaPagina = () => {
    if (paginacion < totalPaginas) setPaginacion(paginacion + 1);
    window.scrollTo(0, 0);
  };

  const previaPagina = () => {
    if (paginacion > 1) setPaginacion(paginacion - 1);
    window.scrollTo(0, 0);
  };

  const goToPage = (p: number) => {
    if (p >= 1 && p <= totalPaginas) setPaginacion(p);
  };

  return {
    paginatedItems,
    paginacion,
    totalPaginas,
    proximaPagina,
    previaPagina,
    goToPage,
  };
}
