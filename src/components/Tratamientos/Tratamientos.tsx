import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import type { Tratamiento } from "../../types";
import useNavigation from "../../hooks/useNavigation";

export default function Tratamientos() {
  const servicios = useFetch<Tratamiento>({
    url: "http://localhost/crud-php-citas/obtener_servicios.php",
  });
  const { goToServicioDetail } = useNavigation();
  const [pagination, SetPagination] = useState(1);

  const porPagina = 6;

  const totalPaginas = Math.ceil(servicios.length / porPagina);

  const inicio = (pagination - 1) * porPagina;
  const serviciosPaginados = servicios.slice(inicio, inicio + porPagina);

  return (
    <div>
      <h3 className="text-2xl md:text-4xl font-bold text-center mt-10">
        Nuestros Tratamientos
      </h3>
      <div className=" m-4 md:m-10 sm:grid-cols-2 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        {serviciosPaginados.map((servicios) => (
          <div key={servicios.id} className="w-full flex justify-center">
            <div className="max-w-sm bg-base-100 border border-gray-200 rounded-lg shadow-sm">
              <img
                className="rounded-t-lg  w-full h-64 object-cover"
                src="/Clinica_Estetica/home.jpg"
                alt=""
              />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-lg sm:text-1xl font-bold  text-accent">
                    {servicios.nombre}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-pretty text-sm sm:text-lg">
                  {servicios.descripcion.slice(0, 100)}...
                </p>
                <a
                  onClick={() => goToServicioDetail(servicios.id.toString())}
                  className="btn-outline btn text-accent inline-flex items-center px-3 py-2 text-sm font-medium text-center  rounded-lg"
                >
                  Leer más
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navegación de páginas */}
      <div className="flex justify-center gap-4 mt-10 items-center place-content-center mb-5">
        <button
          className="btn"
          disabled={pagination === 1}
          onClick={() => SetPagination(pagination - 1)}
        >
          Anterior
        </button>
        <span className="text-lg font-semibold">
          Página {pagination} de {totalPaginas}
        </span>
        <button
          className="btn"
          disabled={pagination === totalPaginas}
          onClick={() => SetPagination(pagination + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
