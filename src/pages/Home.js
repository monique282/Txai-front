import {
    All, HomeManagementControl, TitleControl, Baseboard,
    RegisterProduct, QuantityPages
} from "../assets/Styles/HomeStyled";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contex/authContex";
import Box1Home from "../components/Box1Home";
import Box2Home from "../components/Box2Home";
import PaginationHome from "../components/Pagination";
import Footer from "../assets/images/footer.png"
import ModalDete from "../components/ModalDelete"
import confirmDelete from "../components/ConfirmDelete";
import ManageProducts from "../components/ManageProducts";
import Box3Home from "../components/Box3Home";
import NewProduct from "../components/NewProduct";
import getAllBooks from "../components/AllBooks";

export default function Home() {
    const { list, id, token, setList, setToken , setId, setName} = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalManagementProducts, setShowModalManagementProducts] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showNewProduct, setShowNewProduct] = useState(false);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedId = localStorage.getItem('id');
        const storedUserName = localStorage.getItem('nameUser');

        if (storedToken && storedId && storedUserName) {
            setToken(storedToken);
            setId(storedId);
            setName(storedUserName);
        } else {
            console.log("Dados de autenticação não encontrados no localStorage");
        }
        getAllBooks(setList);
    }, []);

    // abir a lixeira
    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setShowModalDelete(true);
    };
    // fechar a licheira
    const cancelDelete = () => {
        setShowModalDelete(false);
        setItemToDelete(null);
    };

    // abrir a engrenagem
    const handleGearClick = (item) => {
        setSelectedItem(item);
        setShowModalManagementProducts(true);
    };

    // fechar enfrenagem
    const closeManageModal = () => {
        setShowModalManagementProducts(false);
        setSelectedItem(null);
    };

    //fechar novos produtos
    const closeModalNewProduct = () => {
        setShowNewProduct(false)
    };

    //abrir novos podutos
    const HaldleNewProduct = () => {
        setShowNewProduct(true)
    };

    return (
        <All>
            <Box1Home />
            <HomeManagementControl>
                <p>Home</p>
                <p>/</p>
                <p>Gestão</p>
                <p>/</p>
                <p style={{ color: '#2d7575' }}>Controle de Estoque</p>
            </HomeManagementControl>
            <TitleControl>
                <p>Controle de Estoque</p>
                <div className="underline"></div>
            </TitleControl>
            <RegisterProduct onClick={() => HaldleNewProduct()} >+ Cadastrar novo produto</RegisterProduct>
            <Box2Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Box3Home currentItems={currentItems} handleGearClick={handleGearClick} handleDeleteClick={handleDeleteClick} id={id} />
            {showModalDelete && (
                <ModalDete
                    message="Tem certeza que deseja deletar este item?"
                    onConfirm={() => confirmDelete({ itemToDelete, token, setShowModalDelete, setItemToDelete, setList })}
                    onCancel={() => cancelDelete({})} >
                </ModalDete>
            )}
            {showModalManagementProducts && (
                <ManageProducts
                    item={selectedItem}
                    token={token}
                    setList={setList}
                    onClose={() => closeManageModal({})}
                />
            )}
            {showNewProduct && (
                <NewProduct
                id={id}
                token={token}
                setList={setList}
                onClose={() => closeModalNewProduct({})}
            />
            )}
            <QuantityPages>
                <PaginationHome currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </QuantityPages>
            <Baseboard>
                <img src={Footer} alt="" />
            </Baseboard>
        </All>
    );
}
