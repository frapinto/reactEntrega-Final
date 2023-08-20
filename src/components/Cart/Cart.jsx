import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);

    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map((product) => <CartItem key={product.id} product={product} />)}
            <h3>Total: $ {totalPrice}</h3> { }
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    );
}

export default Cart;