import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MdShoppingCart } from "react-icons/md";
import "./style.css";
import { ImgShopCart } from './StyledShoppingCart';


const ShoppingCart = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p ><MdShoppingCart onClick={showDrawer}/></p>

      <Drawer className='ant-drawer-content' title="Carrinho" placement="right" onClose={onClose} open={open}>
        <div>
        <ImgShopCart src="https://m.media-amazon.com/images/I/51eRW4vTUJL._SX323_BO1,204,203,200_.jpg" alt="" />
        </div>
      </Drawer>
    </div>
  );
};

export default ShoppingCart;