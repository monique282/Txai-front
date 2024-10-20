import {
    All, HomeManagementControl, TitleControl, Baseboard,
    RegisterProduct, ConfigurationRecycleBin, Box3,
    QuantityPages
} from "../assets/Styles/HomeStyled";
import { useContext, useState } from "react";
import { AuthContext } from "../contex/authContex";
import DayAndMonthAndYear from "../components/DayAndMonthAndYear";
import FormatToReal from "../components/FormatToReal";
import Box1Home from "../components/Box1Home";
import Box2Home from "../components/Box2Home";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import PaginationHome from "../components/Pagination";
import Footer from "../assets/images/footer.png"
import ModalDete from "../components/ModalDelete"
import confirmDelete from "../components/ConfirmDelete";

export default function Home() {
    const { list, id, token, setList } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    const handleDeleteClick = (item) => {
        setItemToDelete(item); 
        setShowModal(true);
    };

    const cancelDelete = () => {
        setShowModal(false); 
        setItemToDelete(null); 
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
            <RegisterProduct >+ Cadastrar novo produto</RegisterProduct>
            <Box2Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Box3>
                <table>
                    <thead>
                        <tr>
                            <th>Data de Cadastro</th>
                            <th style={{ width: '150px' }} >Nome</th>
                            <th>Valor</th>
                            <th>Quantidade</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index}>
                                <td>{DayAndMonthAndYear(item.createdAt)}</td>
                                <td >{item.name}</td>
                                <td>{FormatToReal(item.value)}</td>
                                <td>{item.amount}</td>
                                <td>{FormatToReal(item.value * item.amount)}</td>
                                <td>
                                    <ConfigurationRecycleBin>
                                        {item.userId === id && (
                                            <>
                                                <FaGear style={{ color: "black", marginRight: "20px" }} />
                                                <RiDeleteBin6Fill
                                                    style={{ color: "red", cursor: "pointer" }}
                                                    onClick={() => handleDeleteClick(item.id)}
                                                />
                                            </>
                                        )}
                                    </ConfigurationRecycleBin>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box3>
            {showModal && (
                <ModalDete
                    message="Tem certeza que deseja deletar este item?"
                    onConfirm={() => confirmDelete({ itemToDelete, token, setShowModal, setItemToDelete, setList })}
                    onCancel={() => cancelDelete({})} >
                </ModalDete>
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
