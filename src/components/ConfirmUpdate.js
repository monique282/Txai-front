import axios from "axios";
import getAllBooks from "./AllBooks";

export default async function confirmUpdate({token, id , onClose, updatedProduct, setList}) {

    try {
        const urlRequest = `${process.env.REACT_APP_API_URL}/booksupdate/${id}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
        const response = await axios.put(urlRequest, updatedProduct, config);
        if (response.status === 200) {
            onClose()
            getAllBooks(setList)
        } else {
            console.error('Erro ao deletar item', response.data);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
};
