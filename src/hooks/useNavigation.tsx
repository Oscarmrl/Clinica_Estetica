import { useNavigate } from "react-router-dom";

export default function useNavigation() {
  const navigate = useNavigate();
  return {
    goToHome: () => {
      navigate("/Clinica_Estetica");
    },
    goToNosotros: () => {
      navigate("/Clinica_Estetica/Nosotros");
    },
    goToTratamientos: () => {
      navigate("/Clinica_Estetica/Tratamientos");
    },
    goToCitas: () => {
      navigate("/Clinica_Estetica/Citas");
    },
  };
}
