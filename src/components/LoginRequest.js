import axios from "axios";
import getAllBooks from "./AllBooks";

export default async function handleLoginClick({cpf, password, setToken, remember, setName, setId, navigate, setList}) {
    try {
        const urlRequest = `${process.env.REACT_APP_API_URL}/user`;
        const data = { cpf, password };
        const response = await axios.post(urlRequest, data);
        localStorage.setItem('token', response.data[1].token);
        localStorage.setItem('nameUser', response.data[0].nameUser);
        localStorage.setItem('id', response.data[0].id);
        setToken(response.data[1].token);
        setName(response.data[0].nameUser);
        setId(response.data[0].id);
        getAllBooks(setList);
        navigate("/home");
    } catch (err) {
        if (err.response) {
            alert(err.response.data.message);
        } else {
            alert("Ocorreu um erro ao tentar fazer o login.");
        }
    }
};
