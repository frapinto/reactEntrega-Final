import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './ItemDetail.css'

const ItemDetail = (props) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
    };

    addItem(item, quantity);
  };

  return (
    <article className="ItemDetailContainer">
      <header className="Header">
        <h2 className="ItemHeader">{props.name}</h2>
      </header>
      <picture>
        <img src={props.img} alt={props.name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {props.category}</p>
        <p className="Info">Descripción: {props.description}</p>
        <p className="Info">Precio: ${props.price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar Compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={props.stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
