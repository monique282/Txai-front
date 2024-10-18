import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginHandler({ cpf, setCpf, password, setPassword, remember, setRemember }) {
    const navigate = useNavigate();

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
            navigate("/");
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message);
            } else {
                alert("Ocorreu um erro ao tentar fazer o login.");
            }
        }
    };

    return { handleLoginClick };
}
