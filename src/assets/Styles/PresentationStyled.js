import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #2d7575;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WelcomeLogoButton = styled.div`
    width:auto; 
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImageLogo = styled.img`
    width: auto; 
    height: auto; 
    max-width: 100%; 
    display: block;
    margin-bottom: 20%; 
`
export const Welcome = styled.p`
    align-self: flex-end; 
    font-size: 30px;
    font-family: 'Arial', sans-serif;
    color: #F8F8F8;
    -webkit-text-stroke: 1px black; 
    font-weight: 1000;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`
export const EnterButton = styled.button`
    width: 100%; 
    height: 40px;
    background-color: #2d7575;
    border: none;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
`
