import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ product }) => {
    const { removeItem } = useContext(CartContext);

    const totalItemPrice = product.price * product.quantity;

    return (
        <div className="cart-item">
            <h4>{product.name}</h4>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio Unitario: {product.price}</p>
            <p>Precio Total: {totalItemPrice}</p> { }
            <button onClick={() => removeItem(product.id)}>Eliminar</button>
            <hr />
        </div>
    );
}

export default CartItem;