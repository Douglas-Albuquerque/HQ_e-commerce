import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MdShoppingCart } from "react-icons/md";
import "./style.css";
import { AddresInput, ContainetAdress, CupomDiv, InputCupom, Purchase, PurDiv, TextAddres, TextInput } from './StyledShoppingCart';
import CardShoppingCart from '../CardShoppingCard/CardShoppingCart';


const ShoppingCart = () => {
  const [open, setOpen] = useState(false);
  const confimPurchase = () => {
    alert("Compra realizada com sucesso!")
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p ><MdShoppingCart onClick={showDrawer} /></p>

      <Drawer className='ant-drawer-content' title="Shopping Cart" placement="right" onClose={onClose} open={open}>
        <CardShoppingCart />
        <ContainetAdress>
          <TextAddres>Delivery Addres:</TextAddres>
          <AddresInput type="text" placeholder='             
          Rua
          /N°
          /Bairro
          /Cidade
          /Cep'/>
        </ContainetAdress>
        <CupomDiv>
          <TextInput>Coupon</TextInput>
          <InputCupom type="text" />
        </CupomDiv>
        <PurDiv>
          <p>Total: $2,50</p>
          <Purchase onClick={confimPurchase}>Purchase</Purchase>
        </PurDiv>
      </Drawer>
    </div>
  );
};

export default ShoppingCart;