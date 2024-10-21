import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { Overlay, ButtonCancel, AiOutlineCloseTitle, GrupLabel, ButtonContainer, ButtonUpdate, 
Container, FormGroup, Input, Label, QuantityButton, QuantityContainer, Title } from '../assets/Styles/ManageProductsStyled';
import RegisterNewProduct from './RegisterNewProduct';

const NewProduct = ({ id, token, setList , onClose}) => {

  const [quantity, setQuantity] = useState(1);
  const [nameTitle, setNameTitle] = useState();
  const [value, setValue] = useState();
  const [createdAt, setCreatedAt] = useState(new Date().toISOString().split('T')[0]);


  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrement = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const handleSubmit = () => {
    const newProduct = {
      name: nameTitle,
      value: parseFloat(value.replace('R$', '').replace(',', '.')), 
      amount: quantity,
      userId: id
    };
    RegisterNewProduct({token, onClose, newProduct, setList})
    
  };

  return (
    <Overlay>
      <Container>
        <AiOutlineCloseTitle>
          <Title>Cadastrar novo produto</Title>
          <AiOutlineClose onClick={onClose} />
        </AiOutlineCloseTitle>

        <FormGroup>
          <Label>Data de cadastro:</Label>
          <Input type="date" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} />
        </FormGroup>

        <FormGroup style={{ display: "flex", justifyContent: "space-between" }}>
          <GrupLabel>
            <Label>Nome do produto</Label>
            <Input
              style={{ width: "250px", marginRight: "20px" }}
              type="text"
              value={nameTitle}
              onChange={(e) => setNameTitle(e.target.value)}
            />
          </GrupLabel>
          <GrupLabel style={{ display: "flex", flexDirection: "column" }}>
            <Label>Quantidade</Label>
            <QuantityContainer>
              <QuantityButton
                style={{ borderRadius: "5px  0px 0px 5px", borderRight: "none" }}
                onClick={handleDecrement}
              >-</QuantityButton>
              <Input
                style={{ width: "25px", height: "17px", marginBottom: "0px", borderRadius: "0px", border: "1px solid #2d7575", borderRight: "none", borderLeft: "none", textAlign: "center" }}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
              <QuantityButton
                style={{ borderRadius: "0px  05px 5px 0px", borderLeft: "none" }}
                onClick={handleIncrement}
              >+</QuantityButton>
            </QuantityContainer>
          </GrupLabel>
        </FormGroup>
        <FormGroup>
          <Label>Valor R$</Label>
          <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormGroup>

        <ButtonContainer>
          <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
          <ButtonUpdate onClick={handleSubmit}>Atualizar</ButtonUpdate>
        </ButtonContainer>
      </Container>
    </Overlay>
  );
};

export default NewProduct;
