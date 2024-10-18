import { All, ImageLogo, Welcome } from "../assets/Styles/HomeStyled";
import Logo from "../assets/images/logo.png"

export default function Home() {

  return (
    <All>
      <Welcome>Bem-vindo!</Welcome>
      <ImageLogo src={Logo} alt="Logo da Txai" />
    </ All>);
}
