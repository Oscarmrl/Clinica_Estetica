import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import type { Tratamiento } from "../../types";
import useNavigation from "../../hooks/useNavigation";

export default function Otrasopciones() {
  const { id } = useParams();
  // const servicio = useFetch<Tratamiento>({
  //   url: "http://localhost/crud-php-citas/obtener_servicios.php",
  // });
  const { data: servicio } = useFetch<Tratamiento>({
    url: "http://localhost/crud-php-citas/obtener_servicios.php",
  });
  const { goToServicioDetail } = useNavigation();

  const servicioEncontrado = servicio.find((p) => p.id.toString() === id);

  if (!servicioEncontrado || !servicio)
    return (
      <p className="text-2xl text-center font-bold">servicio no encontrado</p>
    );

  return (
    <div className="m-5 md:m-10">
      <h3 className="md:text-3xl text-xl text-accent font-bold mb-4 text-center">
        También te podría interesar:
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {servicio
          .filter((p) => p.id !== servicioEncontrado.id)
          .slice(0, 3)
          .map((servicio) => (
            <div
              key={servicio.id}
              className="rounded-badge bg-base-100 rounded-3xl p-4 hover:shadow-2xl transition-shadow duration-300 border border-blue-50"
            >
              <img
                src={`/Clinica_Estetica/Servicios/${servicio.foto_servicio}.jpg`}
                alt={servicio.nombre}
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="text-lg text-accent font-semibold mt-2">
                {servicio.nombre}
              </h4>
              <p className="text-lg">{servicio.descripcion.slice(0, 60)}...</p>
              <span className="font-bold block mt-1">{servicio.precio}</span>
              <div className="flex gap-4 mt-2 ">
                <button
                  onClick={() => goToServicioDetail(servicio.id.toString())}
                  className="btn btn-outline btn-sm btn-accent"
                >
                  Leer más
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
