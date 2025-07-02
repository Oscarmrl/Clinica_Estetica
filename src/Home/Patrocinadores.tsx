export default function Patrocinadores() {
  return (
    <div className="w-full bg-base-200 h-80 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-items-center mt-10">
      <img
        src="/Clinica_Estetica/steticapro.svg"
        alt="Stetica"
        className="max-h-12 w-auto"
      />
      <img
        src="/Clinica_Estetica/cerave.svg"
        alt="CeraVe"
        className="max-h-12 w-auto"
      />
      <img
        src="/Clinica_Estetica/hidrafacial.svg"
        alt="Hydrafacial"
        className="max-h-12 w-auto"
      />
    </div>
  );
}
