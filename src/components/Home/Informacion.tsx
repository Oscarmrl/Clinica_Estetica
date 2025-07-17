export default function Informacion() {
  return (
    <div className="min-h-[600px] grid grid-rows md:grid-cols-2 gap-4 bg-base-100 ">
      <div className="flex flex-col gap-4 justify-center mt-3 ">
        <h2 className=" text-4xl md:text-5xl font-bold text-accent text-center">
          POR QUÉ ELEGIRNOS
        </h2>
        <p className="text-lg lg:text-2xl  mx-auto px-4 md:px-11 mt-2 md:mt-8">
          Elegir una clínica estética es una decisión importante, y en nuestra
          clínica nos comprometemos a ofrecer un servicio profesional, seguro y
          personalizado. Contamos con un equipo altamente capacitado, tecnología
          de última generación y un enfoque centrado en realzar tu belleza
          natural con resultados visibles y armoniosos.
        </p>
        <button className="btn-outline btn m-6 text-accent">
          MÁS INFORMACIÓN
        </button>
      </div>
      <div className="h-[300px] md:h-[600px] ">
        <img
          className="w-full h-full object-cover"
          src="/Clinica_Estetica/home2.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
