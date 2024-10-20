import axios from "axios";
import getAllBooks from "./AllBooks";

export default async function RegisterNewProduct({token, onClose, newProduct, setList}) {
    try {
        const urlRequest = `${process.env.REACT_APP_API_URL}/books`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
        const response = await axios.post(urlRequest, newProduct, config);
        if (response.status === 201) {
            onClose()
            getAllBooks(setList)
        } else {
            console.error('Erro ao deletar item', response.data);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
};
