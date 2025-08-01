import type { Cita } from "../../types";
import useFetch from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";
import { TiDeleteOutline } from "react-icons/ti";

export default function Citas() {
  const citas = useFetch<Cita>({
    url: "http://localhost/crud-php-citas/obtener_citas.php",
  });
  const {
    paginatedItems: citas_paginadas,
    proximaPagina,
    previaPagina,
    totalPaginas,
    paginacion,
  } = usePagination(citas, 4);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl font-bold m-5">
        Tus citas programadas
      </h2>

      <div className=" grid grid-cols-1 gap-4  md:m-10 ">
        {citas_paginadas.map((cita) => (
          <div className="bg-base-300 w-full md:w-[900px] rounded-2xl grid grid-cols-3 gap-1 md:gap-4 ">
            <img
              src="/Clinica_Estetica/home.jpg"
              alt=""
              className="w-full sm:w-40 sm:h-full md:w-full object-cover rounded-2xl"
            />
            <div className="flex justify-start flex-col gap-1 md:gap-2">
              <h3 className="text-start text-sm md:text-3xl text-accent font-bold mb-2 md:mb-4">
                {cita.nombre_servicio}
              </h3>
              <span className="md:text-2xl text-xs font-black">Notas:</span>
              <p className="md:text-xl text-sm">{cita.notas}</p>
            </div>

            <div className="flex flex-col justify-between items-end">
              <TiDeleteOutline className="btn rounded-b-full btn-dash text-red-600" />
              <button
                className="btn btn-accent btn-wide rounded-t-full text-xs px-2
"
              >
                fecha: {cita.fecha} hora: {cita.hora}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-10 items-center place-content-center mb-5">
        <button
          className="btn"
          disabled={paginacion === 1}
          onClick={previaPagina}
        >
          Anterior
        </button>
        <span className="text-lg font-semibold">
          Página {paginacion} de {totalPaginas}
        </span>
        <button
          className="btn"
          disabled={paginacion === totalPaginas}
          onClick={proximaPagina}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
