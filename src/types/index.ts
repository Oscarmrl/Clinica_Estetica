export type Tratamiento = {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: number;
  precio: number;
};
export type endpoit = {
  url: string;
};

export type Cita = {
  id: number;
  fecha: string;
  hora: string;
  estado: string;
  notas: string;
};
