import Informacion from "./Informacion";
import Patrocinadores from "./Patrocinadores";

export default function Home() {
  return (
    <div>
      <div className="h-[600px] grid grid-rows md:grid-cols-2 gap-4 bg-base-100">
        <div className="h-[300px] md:h-[600px] relative">
          <img
            className="w-full h-full object-cover"
            src="/Clinica_Estetica/home.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 justify-center mt-3 ">
          <h2 className=" text-4xl md:text-5xl font-bold text-accent text-center">
            ¡RESALTA TU BELLEZA!
          </h2>
          <span className="text-center text-2xl font-light">
            BELOCLINIC - HONDURAS
          </span>

          <p className="text-lg md:text-2xl max-w-xl mx-auto px-4 md:px-11 mt-2 md:mt-8">
            Nuestro objetivo es brindar bienestar y belleza a través de
            servicios y productos personalizados y de alta calidad que mejoran
            la calidad de vida y resaltan la belleza natural de nuestros
            clientes.
          </p>
        </div>
      </div>

      <Patrocinadores />
      <main className="flex flex-col gap-y-6">
        <Informacion />
      </main>
    </div>
  );
}
