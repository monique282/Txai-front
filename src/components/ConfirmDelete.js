import axios from "axios";
import getAllBooks from "./AllBooks";

export default async function confirmDelete({ itemToDelete, token, setShowModal, setItemToDelete,setList }) {

    try {
        const urlRequest = `${process.env.REACT_APP_API_URL}/booksdelet/${itemToDelete}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        };

        const response = await axios.delete(urlRequest, config);

        if (response.status === 200) {
            setShowModal(false); 
            setItemToDelete(null); 
            getAllBooks(setList)
        } else {
            console.error('Erro ao deletar item', response.data);
        }
    } catch (error) {
        console.error('Erro na requisição', error);
    }
};
