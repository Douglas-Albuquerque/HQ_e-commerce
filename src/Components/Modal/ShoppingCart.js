import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MdShoppingCart } from "react-icons/md";
import "./style.css";


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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default ShoppingCart;