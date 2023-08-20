import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <ShoppingCartIcon />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;