import { useState } from "react";
import { All, WelcomeLogoButton, Title, CpfSenha, InputCpfSenha, RememberForgot, ToRemember, Forgot, Label, NoRegistrationIf, PrivacyPolicy } from "../assets/Styles/Login";

export default function Login() {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false); 

    const rememberChange = () => {
        setRemember(!remember);
    };

    return (
        <All>
            <WelcomeLogoButton>
                <Title>Login</Title>
                <CpfSenha>CPF</CpfSenha>
                <InputCpfSenha
                    className="value-rule"
                    placeholder="Insira seu CPF, somente números"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    > 
                </InputCpfSenha>
                <CpfSenha>Senha</CpfSenha>
                <InputCpfSenha
                    className="value-rule"
                    placeholder="Insira sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    >
                </InputCpfSenha>
                <RememberForgot>
                    <Label>
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={rememberChange}
                        />
                        <p>Lembrar minha senha</p>
                    </Label>
                    <a href="/" style={{ color: '#2f7171', textDecoration:'none', fontSize: '15px' }} ><h1>Esqueci minha senha</h1></a> 
                </RememberForgot>
                <NoRegistrationIf>Não tem uma conta? <a href="/" style={{ color: '#2f7171', textDecoration:'none', fontSize: '13px' }} >cadastre-se agora</a></NoRegistrationIf>
                <PrivacyPolicy>Ajuda ° Política de privacidade</PrivacyPolicy>
                </WelcomeLogoButton>
        </ All>
    );
}
