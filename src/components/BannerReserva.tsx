export default function BannerReserva() {
  return (
    <div className="h-[500px] bg-white w-full grid grid-cols-1 md:grid-cols-2">
      <div className="min-h-[300px] md:min-h-[500px]">
        <img
          className="w-full h-full  object-contain"
          src="/Clinica_Estetica/home3.jpg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center p-4 text-center text-accent-content">
        <div>
          <h2 className="text-xl md:text-3xl font-bold">
            ¡NO SIGAS PERDIENDO TIEMPO!
          </h2>
          <p className="mt-2">Reserva tu cita con nosotros ahora mismo.</p>
          <button className="mt-4 px-6 py-2 btn-outline btn">
            RESERVAR CITA
          </button>
        </div>
      </div>
    </div>
  );
}
