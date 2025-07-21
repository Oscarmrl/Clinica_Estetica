import { useState } from "react";

const tratamientos = [
  {
    imagen: "/Clinica_Estetica/home.jpg",
    titulo: "Titulo 1",
    info: "lorejkdncnosdncoinsocnosinoinocnsoindconcosinoincoisnoiencepopw",
  },
  {
    imagen: "/Clinica_Estetica/home.jpg",
    titulo: "Titulo 2",
    info: "lorejkdncnosdncoinsocnosinoinocnsoindconcosinoincoisnoiencepopw",
  },
  {
    imagen: "/Clinica_Estetica/home.jpg",
    titulo: "Titulo 3",
    info: "lorejkdncnosdncoinsocnosinoinocnsoindconcosinoincoisnoiencepopw",
  },
  {
    imagen: "/Clinica_Estetica/home.jpg",
    titulo: "Titulo 4",
    info: "lorejkdncnosdncoinsocnosinoinocnsoindconcosinoincoisnoiencepopw",
  },
  {
    imagen: "/Clinica_Estetica/home.jpg",
    titulo: "Titulo 5",
    info: "lorejkdncnosdncoinsocnosinoinocnsoindconcosinoincoisnoiencepopw",
  },
  {
    imagen: "/Clinica_Estetica/home.jpg",
    titulo: "Titulo 6",
    info: "lorejkdncnosdncoinsocnosinoinocnsoindconcosinoincoisnoiencepopw",
  },
  {
    imagen: "/Clinica_Estetica/home.jpg",
    titulo: "Titulo 7",
    info: "lorejkdncnosdncoinsocnosinoinocnsoindconcosinoincoisnoiencepopw",
  },
];

export default function Tratamientos() {
  const [pagination, SetPagination] = useState(1);

  const porPagina = 6;

  const totalPaginas = Math.ceil(tratamientos.length / porPagina);

  const inicio = (pagination - 1) * porPagina;
  const tratamientosPaginados = tratamientos.slice(inicio, inicio + porPagina);

  return (
    <div>
      <h3 className="text-2xl md:text-4xl font-bold text-center mt-10">
        Nuestros Tratamientos
      </h3>
      <div className="min-h-dvh m-4 md:m-10 sm:grid-cols-2 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        {tratamientosPaginados.map((tratamientos, index) => (
          <div key={index}>
            <div className=" sm:max-w-sm bg-base-100 border border-gray-200 rounded-lg shadow-sm">
              <img
                className="rounded-t-lg  w-full h-64 object-cover"
                src="/Clinica_Estetica/home.jpg"
                alt=""
              />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold  text-accent">
                    {tratamientos.titulo}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-pretty">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="btn-outline btn text-accent inline-flex items-center px-3 py-2 text-sm font-medium text-center  rounded-lg"
                >
                  Leer mas
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
