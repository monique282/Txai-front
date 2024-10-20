import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    position: relative; 
    font-family: 'Arial', sans-serif;
    img{
        margin-left: 20px;
        width: 15%
    }
`;
export const RegistrationLogoPhoto = styled.div`
    width: 80%;
    height: 41vh;
    margin-left: 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    img {
        margin-left: 0px;
        margin-bottom: 10px;
    }
    div {
        margin-bottom: 10px;
    }
`;
export const TitleRegister = styled.p`
    font-size: 30px;
    margin-bottom: 10px;
    
`;
export const Mandatory = styled.p`
    font-size: 20px;
    color: #a09b9b;
`;
export const UploadPhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d7575;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    label{
        width: 120px;
        height: 140px;
        margin-left: 120px;
        display: flex;
        align-items: flex-end;
        position: fixed;
    }
`;
export const UploadPhotoContent = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
`;
export const UploadText = styled.p`
    width: 100px;
    height: 30px;
    margin-top: 5px;
    font-size: 14px;
    color: #579191;
    position: fixed;
    margin-left: 3%;
`;
export const RegistrationData = styled.div`
    width: 80%;
    height: 15vh;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
`;
export const TitleInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    p{
        font-size: 20px;
    }
`;
export const Inputs = styled.input`
    font-size: 20px;
    width: 90%; 
    height: 30px; 
    border-radius: 10px;
    border: 1px solid #d3d3d3; 
    padding: 10px;
    margin-top: 5px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
    outline: none;
    &:focus {
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    }
`;
export const Position= styled.select`
    font-size: 20px;
    color: #757575;
    width: 94%; 
    height: 50px; 
    border-radius: 10px;
    border: 1px solid #d3d3d3; 
    padding: 10px;
    margin-top: 5px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
    outline: none;
    &:focus {
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    }
`;
export const FinishBack = styled.div`
    width: 80%;
    height: 10vh;
    margin-left: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
`;
export const EnterRegister = styled.button`
    width: 15%; 
    height: 40px;
    background-color: #2d7575;
    border: none;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 5%;
`;
export const ToGoBack= styled.button`
    width: 15%; 
    height: 40px;
    color: #757575;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    img{
        margin-right: 5px;
        width: 25px
    }
`;