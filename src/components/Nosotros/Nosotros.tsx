import CarruselSwiper from "../ui/CarrucelSwiper";
export default function Nosotros() {
  return (
    <div>
      <div className="h-[600px] grid grid-rows1 md:grid-cols-2 gap-4 bg-base-100">
        <div className="flex flex-col justify-center text-center gap-4 mt-4">
          <h2 className="text-4xl md:text-5xl font-bold text-accent">
            Nuestros Centros
          </h2>
          <p className="text-lg md:text-2xl max-w-xl mx-auto px-4 md:px-7 mt-2 md:mt-8">
            Nos enorgullece ofrecer la mejor atención a nuestros clientes. No
            solo nos preocupamos por brindar un excelente servicio, sino que
            también nos aseguramos de que cada cliente se sienta valorado y
            escuchado. Contamos con modernas y acogedoras instalaciones que han
            sido diseñadas pensando en brindar comodidad y un ambiente agradable
            para nuestros clientes.
          </p>
        </div>

        <div className="h-[400px] md:h-[600px]">
          <CarruselSwiper />
        </div>
      </div>
    </div>
  );
}
