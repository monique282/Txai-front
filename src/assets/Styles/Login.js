import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative; 
`;
export const WelcomeLogoButton = styled.div`
    width: auto; 
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: 'Arial', sans-serif;
`;
export const Title = styled.div`
    font-size: 40px;
    color: black;
    margin-bottom: 20px;
`;
export const CpfSenha = styled.div`
    font-size: 20px;
    color: black;
    margin-bottom: 2px;
`;
export const InputCpfSenha = styled.input`
    font-size: 15px;
    color: black;
    width: 96%; 
    height: 30px; 
    border-radius: 10px;
    border: 1px solid #d3d3d3; 
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
    outline: none; 
    &:focus {
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    }
`;

export const RememberForgot = styled.div`
    width: 100%; 
    height: 30px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Label = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-family: 'Arial', sans-serif;
        font-size: 15px;
        margin-right: 160px;
    }
`;
export const NoRegistrationIf = styled.div`
    font-size: 13px;
    margin-top: 15%;
    margin-left: 25%;
`;
export const PrivacyPolicy = styled.div`
    position: absolute;
    bottom: 10px; 
    left: 50%;
    transform: translateX(-50%); 
    font-size: 12px;
    color: #d3d3d3;
    text-align: center;
`;

