
import axios from "axios";

export default async function getAllBooks(setList) {
    try {
        const urlRequest = `${process.env.REACT_APP_API_URL}/books`;
        const response = await axios.get(urlRequest);
        if (!response || !response.data || response.data.length === 0) {
            alert("Ocorreu um erro ao tentar buscar os produtos. monique");
        } else {
            setList(response.data)
        }
    } catch (err) {
        console.error("Erro no getTheList:", err);
        if (err.response) {
            alert(err.response.data.message);
        } else {
            alert("Ocorreu um erro ao tentar buscar os produtos.");
        }
    }
};

