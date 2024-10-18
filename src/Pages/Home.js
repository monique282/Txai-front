import { All, EnterButton, ImageLogo, Welcome, WelcomeLogoButton } from "../assets/Styles/HomeStyled";
import Logo from "../assets/images/logo.png"

export default function Home() {

  return (
    <All>
      <WelcomeLogoButton>
        <Welcome>Bem-vindo!</Welcome>
        <ImageLogo src={Logo} alt="Logo da Txai" />
        <EnterButton>Entrar</EnterButton>
      </WelcomeLogoButton>

    </ All>);
}
