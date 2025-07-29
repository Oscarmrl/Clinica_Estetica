import { useNavigate } from "react-router-dom";

export default function useNavigation() {
  const navigate = useNavigate();
  return {
    goToHome: () => {
      navigate("/Clinica_Estetica");
      window.scrollTo(0, 0);
    },
    goToNosotros: () => {
      navigate("/Clinica_Estetica/Nosotros");
      window.scrollTo(0, 0);
    },
    goToTratamientos: () => {
      navigate("/Clinica_Estetica/Tratamientos");
      window.scrollTo(0, 0);
    },
    goToCitas: () => {
      navigate("/Clinica_Estetica/Citas");
      window.scrollTo(0, 0);
    },
    goToServicioDetail: (id: string) => {
      navigate(`/Clinica_Estetica/Tratamientos/${id}`);
      window.scrollTo(0, 0);
    },
  };
}
