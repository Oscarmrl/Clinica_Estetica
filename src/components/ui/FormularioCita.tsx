import React, { useState } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

import type {
  Formulariocita,
  Especialista,
  Tratamiento,
  Horario,
} from "../../types";
import useFetch from "../../hooks/useFetch";

type FormularioCitaProps = {
  servicioPreseleccionado: Tratamiento;
  pacienteId: string;
  Onclose: () => void;
};
export default function FormularioCita({
  servicioPreseleccionado,
  pacienteId,
  Onclose,
}: FormularioCitaProps) {
  const [formData, setFormData] = useState<Formulariocita>({
    paciente_id: "",
    especialista_id: "",
    servicio_id: "",
    fecha: "",
    hora: "",
    estado: "pendiente",
    notas: "",
  });

  const obtenerDiaSemana = (fechaStr: string): string => {
    const dias = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    const fecha = new Date(fechaStr);
    return dias[fecha.getDay()];
  };

  const [especialistaSeleccionado, setEspecialistaSeleccionado] =
    useState<string>("");
  const [toastMessage, setToastMessage] = useState("");

  const { data: especialistasPorServicio } = useFetch<Especialista>({
    url: `http://localhost/crud-php-citas/obtener_especialistas_por_servicio.php?servicio=${encodeURIComponent(
      servicioPreseleccionado.nombre
    )}`,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "especialista_id") {
      setEspecialistaSeleccionado(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const diaSeleccionado = obtenerDiaSemana(formData.fecha);

    // Buscar el horario que el usuario seleccionó
    const horarioSeleccionado = horariosDisponibles.find(
      (h) => h.id === Number(formData.hora)
    );

    if (!horarioSeleccionado) {
      setToastMessage("Debe seleccionar un horario válido.");
      return;
    }

    if (horarioSeleccionado.dia_semana.toLowerCase() !== diaSeleccionado) {
      setToastMessage(
        `La fecha seleccionada cae en un ${diaSeleccionado}, pero el horario es para ${horarioSeleccionado.dia_semana}.`
      );
      return;
    }

    try {
      // Asegúrate de que los campos ocultos se incluyan en formData
      const datosCompletos = {
        ...formData,
        paciente_id: pacienteId,
        servicio_id: servicioPreseleccionado.id.toString(),
      };

      await axios.post(
        "http://localhost/crud-php-citas/crear_cita.php",
        datosCompletos
      );

      setToastMessage("Cita registrada correctamente");

      setFormData({
        paciente_id: "",
        especialista_id: "",
        servicio_id: "",
        fecha: "",
        hora: "",
        estado: "pendiente",
        notas: "",
      });

      // Mostrar el toast durante 2 segundos antes de cerrar el modal
      setTimeout(() => {
        setToastMessage("");
        Onclose();
      }, 2000);
    } catch (err) {
      console.error(err);
      setToastMessage("Error al registrar la cita");
    }
  };
  const { data: horariosDisponibles } = useFetch<Horario>({
    url: especialistaSeleccionado
      ? `http://localhost/crud-php-citas/obtener_horarios_por_especialista.php?especialista_id=${especialistaSeleccionado}`
      : "",
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-base-100 p-4 md:p-6 rounded-xl w-[90%] md:w-[40%] relative shadow-lg max-h-[70vh] overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 mb-10 justify-center "
        >
          <div className=" flex flex-row justify-between items-center mb-4 ">
            <h2 className="text-2xl font-bold ">Registrar Cita</h2>
            <button
              type="button"
              onClick={Onclose}
              className="bg-red-600 text-white text-xl btn btn-ghost"
            >
              salir
            </button>
          </div>
          <p className="mb-2 font-bold ">
            Servicio:{" "}
            <span className="text-accent">
              {servicioPreseleccionado.nombre}
            </span>
          </p>
          <input type="hidden" name="paciente_id" value={pacienteId} readOnly />
          <label className="block mb-2 ">
            <h3 className="font-semibold ">Especialista:</h3>

            <select
              name="especialista_id"
              value={formData.especialista_id}
              onChange={handleChange}
              required
              className="w-full border p-2 bg-base-100 text-base-content"
            >
              <option value="">Seleccione un especialista</option>
              {especialistasPorServicio.map((e) => (
                <option key={e.especialista_id} value={e.especialista_id}>
                  {e.nombre} {e.apellido} - {e.especialidad}
                </option>
              ))}
            </select>
          </label>
          <input
            type="hidden"
            name="servicio_id"
            value={servicioPreseleccionado.id}
            readOnly
          />
          <label className="block mb-2">
            <h3 className="font-semibold">Fecha:</h3>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              className="w-full border p-2"
            />
          </label>
          <label className="block mb-2 ">
            <h3 className=" font-semibold">Ver horarios Disponibles:</h3>
            <select
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
              className="w-full border p-2 bg-base-100 text-base-content"
            >
              <option value="">Seleccione un horario</option>
              {horariosDisponibles.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.dia_semana} {e.hora_inicio} - {e.hora_fin}
                </option>
              ))}
            </select>
          </label>
          <input type="hidden" name="estado" value="pendiente" readOnly />
          <label className="block mb-4">
            <h3 className="font-semibold">Notas:</h3>
            <textarea
              name="notas"
              value={formData.notas}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </label>
          <button
            type="submit"
            className=" px-4 py-2 rounded btn btn-outline btn-accent"
          >
            Guardar Cita
          </button>
        </form>
        {toastMessage && (
          <div className="toast">
            <div className="alert alert-info">
              <span>{toastMessage}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
