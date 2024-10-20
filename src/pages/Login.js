import { useContext, useEffect, useState } from "react";
import { All, WelcomeLogoButton, Title, CpfSenha, InputCpfSenha, RememberForgot, Label, NoRegistrationIf, PrivacyPolicy, EnterButton } from "../assets/Styles/LoginStyled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../contex/authContex";
import getAllBooks from "../components/AllBooks";

export default function Login() {
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    const { setToken, setName, setList } = useContext(AuthContext)

    useEffect(() => {
        const savedCpf = localStorage.getItem('cpf');
        const savedPassword = localStorage.getItem('password');
        const savedRemember = localStorage.getItem('remember') === 'true';

        if (savedRemember) {
            setCpf(savedCpf || '');
            setPassword(savedPassword || '');
            setRemember(true);
        }
    }, [setCpf, setPassword, setRemember]);

    const handleLoginClick = async () => {
        const urlRequest = `${process.env.REACT_APP_API_URL}/user`;
        const data = { cpf, password };
        try {
            const response = await axios.post(urlRequest, data);
            if (remember) {
                localStorage.setItem('cpf', cpf);
                localStorage.setItem('password', password);
                localStorage.setItem('remember', 'true');
            } else {
                localStorage.removeItem('cpf');
                localStorage.removeItem('password');
                localStorage.removeItem('remember');
            }

            setToken(response.data[1].token)
            setName(response.data[0].nameUser)
            getAllBooks(setList)
            navigate("/");
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message);
            } else {
                alert("Ocorreu um erro ao tentar fazer o login.");
            }
        }
    };

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
                    handleLoginClick();
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
                <NoRegistrationIf>Não tem uma conta? <a href="/register" style={{ color: '#2f7171', textDecoration: 'none', fontSize: '13px' }} >cadastre-se agora</a></NoRegistrationIf>
                <PrivacyPolicy>Ajuda ° Política de privacidade</PrivacyPolicy>
            </WelcomeLogoButton>
        </ All>
    );
}
