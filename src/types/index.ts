export type Tratamiento = {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: number;
  precio: number;
  foto_servicio: string;
};
export type endpoit = {
  url: string;
};

export type Cita = {
  id?: number;
  fecha: string;
  hora: string;
  estado: string;
  notas: string;
  nombre_servicio: string;
};
export type Formulariocita = Omit<Cita, "nombre_servicio"> & {
  paciente_id: string;
  especialista_id: string;
  servicio_id: string;
};

export type RolUsuario = "paciente" | "admin" | "Especialista" | "Empleado";

export type Usuario = {
  id: number;
  nombre: string;
  apellido: string;
  correo: string | null;
  telefono: string | null;
  fechaNa: string; // formato YYYY-MM-DD
  contraseña: string | null;
  rol: RolUsuario;
};

export type Especialista = {
  especialista_id: number;
  usuario_id: number;
  especialidad: string;
  descripcion: string;
  foto_url: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
};
export type Horario = {
  id: number;
  especialista_id: number;
  dia_semana: string;
  hora_inicio: string;
  hora_fin: string;
};
