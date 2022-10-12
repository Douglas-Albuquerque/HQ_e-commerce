import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { MdShoppingCart } from "react-icons/md";
import "./style.css";
import { AddresInput, ContainerCart, ContainetAdress, CupomDiv, EmptyCart, ImgItem, InputCupom, Purchase, PurDiv, TextAddres, TextInput, TitleItem } from './StyledShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setImage, setPrice } from '../../Redux/cardSlice';
import emptyCart from "../../Assets/empty-cart.png"


const ShoppingCart = ({ price, title, image }) => {
  const state = useSelector(state => state.user)

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const confimPurchase = () => {
    alert("Compra realizada com sucesso!")
  }

  const showDrawer = () => {
    setOpen(true);
    dispatch(setTitle(title));
    dispatch(setImage(image));
    dispatch(setPrice(price));

  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => { }, [state.title])
  return (
    <div>
      <p ><MdShoppingCart onClick={showDrawer} /></p>
      <Drawer className='ant-drawer-content' title="Shopping Cart" placement="right" onClose={onClose} open={open}>

        {(state.title !== undefined)
          ? <div>
            <ContainerCart>
              <ImgItem src={image} alt="" />
              <TitleItem>
                <p>{title}</p>
                <p>Price: ${price}</p>
              </TitleItem>
            </ContainerCart>
            <ContainetAdress>
              <TextAddres>Delivery Addres:</TextAddres>
              <AddresInput type="text" />
            </ContainetAdress>
            <CupomDiv>
              <TextInput>Coupon</TextInput>
              <InputCupom type="text" />
            </CupomDiv>
            <PurDiv>
              <p>Total: ${price}</p>
              <Purchase onClick={confimPurchase}>Purchase</Purchase>
            </PurDiv>
          </div>
          :
          <div>
            <EmptyCart src={emptyCart} alt="" />
          </div>
        }
      </Drawer>
    </div>
  );
};

export default ShoppingCart;