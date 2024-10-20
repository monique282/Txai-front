import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    position: relative; 
    font-family: 'Arial', sans-serif;
    overflow: auto; 
`;
export const Box1 = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 97%;
    height: 60px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px; 
    z-index: 1000;
`;
export const LogoMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SupportCalendarNotificationProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Support = styled.div`
    display: flex;
    margin-right : 20px;
    p{
        font-size: 14px;
        margin-left: 2px;
    }
`;
export const Calendar = styled.div`
    display: flex;
    margin-right : 20px;
    p{
        font-size: 14px;
        margin-left: 2px;
    }
`;
export const Profile = styled.div`
    display: flex;
    margin-right : 20px;
    p{
        font-size: 14px;
        margin-left: 2px;
    } 
`;
export const HomeManagementControl = styled.div`
    display: flex;
    padding-left: 20px;
    align-items: center;
    margin-top: 100px;
    p{
        font-size: 14px;
        color: #8e9595;
        margin-left: 5px;
    } 
`;
export const TitleControl = styled.div`
    margin-top: 30px;
    p{
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: #333;
        margin-left: 5px;
    }
    .underline {
        width: 210px;
        height: 3px;
        background-color: #2d7575; 
        margin: 0 auto;
        margin-top: 5px;
        }
`;
export const RegisterProduct = styled.div`
    width: 300px; 
    min-height: 40px;
    background-color: #2d7575;
    border: none;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;
export const Box2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    font-size: 15px;
`;
export const Box3 = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 20px;
    font-size: 15px;
    table {
        width: 80%;
        border-collapse: collapse; 
        margin-top: 20px; 
    }
    th, td {
        border: none; 
        padding: 15px; 
        text-align: left; 
    }
    th {
        font-weight: bold; 
    }
`;
export const Result = styled.div`
`;
export const NumberPages = styled.div`
`;
export const Name = styled.div`
`;
export const Value = styled.div`
`;
export const Amount = styled.div`
`;
export const TotalValue = styled.div`
`;
export const ConfigurationRecycleBin = styled.div`
`;
export const ShowResult = styled.div`

`;
export const QuantityPages = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-left: 5%;
    font-size: 12px;
`;
export const Baseboard = styled.div`
    width: 100%;
    img{
        width: 100%;   
    }
`;
export const Pagination = styled.div`

    .pagination-button {
        border: none;
        background-color: #f0f0f0;
        border-radius: 50%; 
        width: 30px; 
        height: 30px; 
        align-items: center; 
        justify-content: center; 
        margin: 0 5px; 
        cursor: pointer; 
    }
    .pagination-button.active {
        background-color: #2d7575; 
        color: white; 
    }
    button {
        margin: 0 5px;
        padding: 8px 12px;
        border: 1px solid #ccc;
        background-color: white;
        cursor: pointer;
        border-radius: 50%;
    }
    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    button.active {
        background-color: #2d7575;
        color: white;
        border-color: green;
    }
    span {
        margin: 0 5px;
        padding: 8px 12px;
        color: #888;
    }
`;
