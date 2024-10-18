import { useState } from "react";
import { All, WelcomeLogoButton, Title, CpfSenha, InputCpfSenha, RememberForgot, Label, NoRegistrationIf, PrivacyPolicy, EnterButton } from "../assets/Styles/LoginStyled";
import LoginHandler from "../components/LoginRequest";

export default function Login() {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const { LoginClick } = LoginHandler({ cpf, setCpf, password, setPassword, remember, setRemember });

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
                    onChange={(e) => {
                        const onlyNumbers = e.target.value.replace(/\D/g, '');
                        setCpf(onlyNumbers);
                    }}
                    inputMode="numeric"
                />
                <CpfSenha>Senha</CpfSenha>
                <InputCpfSenha
                    className="value-rule"
                    placeholder="Insira sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <EnterButton onClick={async () => {
                    LoginClick();
                }}>Entrar</EnterButton>
                <RememberForgot>
                    <Label>
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={rememberChange}
                        />
                        <p>Lembrar minha senha</p>
                    </Label>
                    <a href="/" style={{ color: '#2f7171', textDecoration: 'none', fontSize: '15px' }} ><h1>Esqueci minha senha</h1></a>
                </RememberForgot>
                <NoRegistrationIf>Não tem uma conta? <a href="/" style={{ color: '#2f7171', textDecoration: 'none', fontSize: '13px' }} >cadastre-se agora</a></NoRegistrationIf>
                <PrivacyPolicy>Ajuda ° Política de privacidade</PrivacyPolicy>
            </WelcomeLogoButton>
        </ All>
    );
}
