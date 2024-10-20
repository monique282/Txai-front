import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; 
`;
export const ModalContainer = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    height: 160px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`;
export const Button = styled.button`
    width: 120px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;



