import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { ModalContainer, Overlay, Button } from "../assets/Styles/ModalDelet";

export default function Modal({ onConfirm, onCancel }) {
    return (
        <Overlay>
            <ModalContainer>
                <div
                    style={{ display: "flex", justifyContent: "flex-end", marginRight: "15px", cursor: "pointer" }}
                    onClick={onCancel} // Aqui você estava passando onCancel sem executar
                >
                    <AiOutlineClose />
                </div>
                <div style={{ backgroundColor: "#e61e32", width: "50px", height: "50px", borderRadius: "50%" }}>
                    <RiDeleteBin6Fill style={{ color: "white", cursor: "pointer", width: "30px", height: "30px" }} />
                </div>
                <div>
                    <Button onClick={onCancel}>Cancelar</Button>
                    <Button style={{ backgroundColor: "#e61e32" }} onClick={onConfirm}>Excluir</Button>
                </div>
            </ModalContainer>
        </Overlay>
    );
}
