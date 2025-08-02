import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import type { Tratamiento } from "../../types";
import Otrasopciones from "./Otrasopciones";
import FormularioCita from "../ui/FormularioCita";
import { useState } from "react";

export default function Servicio_detail() {
  const { id } = useParams();
  const usuarioAutenticado = 1; // 🛠️ Simulación de usuario autenticado, reemplazar con lógica real

  const { data: servicio } = useFetch<Tratamiento>({
    url: "http://localhost/crud-php-citas/obtener_servicios.php",
  });
  const [showModal, setShowModal] = useState(false);

  if (!servicio)
    return (
      <p className="text-3xl text-center m-10 font-bold">Cargando datos...</p>
    ); // 🕒 Mientras se cargan los datos

  const servicioDetail = servicio.find(
    (servicio) => servicio.id.toString() === id
  );

  if (!servicioDetail)
    return (
      <p className="text-3xl text-center m-10 font-bold">
        Servicio no encontrado
      </p>
    ); // ❗ Si no existe el id

  return (
    <div>
      <div className="justify-center bg-base-300 grid grid-rows-1 md:grid-cols-2 gap-4 ">
        <div>
          <div className="h-[250px] sm:h-[300px] md:h-[550px] relative ">
            <img
              className="w-full h-full object-cover"
              src={`/Clinica_Estetica/Servicios/${servicioDetail.foto_servicio}.jpg`}
              alt=""
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl m-4 md:mt-10 font-bold text-start text-accent ">
            {servicioDetail.nombre}
          </h3>
          <p className="md:text-2xl px-5 text-lg">
            {servicioDetail.descripcion}
          </p>

          <div className="flex flex-row justify-between m-5 items-center gap-4">
            <span className="font-bold text-lg">
              precio: {servicioDetail.precio}
            </span>
            <button
              onClick={() => setShowModal(true)}
              className="md:mr-10 btn btn-outline btn-primary md:btn-wide"
            >
              RESERVAR CITA
            </button>
            {showModal && (
              <FormularioCita
                Onclose={() => setShowModal(false)}
                servicioPreseleccionado={servicioDetail}
                pacienteId={usuarioAutenticado.toString()}
              />
            )}
          </div>
        </div>
      </div>
      <Otrasopciones />
    </div>
  );
}
