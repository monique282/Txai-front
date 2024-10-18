import { useNavigate } from "react-router-dom";
import { All, EnterButton, ImageLogo, Welcome, WelcomeLogoButton } from "../assets/Styles/HomeStyled";
import Logo from "../assets/images/logo.png"

export default function Home() {
  const navigate = useNavigate();

  const enterClickLogin = () => {
    navigate("/login");
  };
  return (
    <All>
      <WelcomeLogoButton>
        <Welcome>Bem-vindo!</Welcome>
        <ImageLogo src={Logo} alt="Logo da Txai" />
        <EnterButton onClick={enterClickLogin}>Entrar</EnterButton>
      </WelcomeLogoButton>
    </ All>
    );
}
