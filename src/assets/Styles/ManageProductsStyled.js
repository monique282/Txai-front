import styled from 'styled-components';

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
export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;
export const Title = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;
export const FormGroup = styled.div`
  margin-bottom: 15px;
`;
export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 50%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
`;
export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const QuantityButton = styled.button`
  width: 30px;
  padding: 6px;
  font-size: 18px;
  cursor: pointer;
  color: #333;
  border: 1px solid #2d7575;
  
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;
export const ButtonCancel = styled.button`
  background-color: #f5f5f5;
  color: #666;
  padding: 8px 16px;
  border-radius: 4px;
  border:none ;
  cursor: pointer;
`;
export const ButtonUpdate = styled.button`
  background-color: #2d7575;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
export const AiOutlineCloseTitle = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid #2d7575;
    border-top: none;
    border-left:  none;
    border-right: none;
    margin-bottom: 20px;

`;
export const GrupLabel = styled.div`
    display: flex;
    flex-direction: column ;
`;