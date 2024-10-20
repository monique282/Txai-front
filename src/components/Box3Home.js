import { FaGear } from "react-icons/fa6";
import { Box3, ConfigurationRecycleBin } from "../assets/Styles/HomeStyled";
import DayAndMonthAndYear from "./DayAndMonthAndYear";
import FormatToReal from "./FormatToReal";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Box3Home({currentItems, handleGearClick, handleDeleteClick, id}) {
  
    return (
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
                                                <FaGear style={{ color: "black", marginRight: "20px" }}
                                                    onClick={() => handleGearClick(item)}
                                                 />
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
    );
}
