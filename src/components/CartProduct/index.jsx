import React from "react";
import { useDispatch } from "react-redux";
import { addCartThunk, removeCartThunk } from "../../store/modules/cart/thunk";
import { AddContainer, Container } from "./style";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <li key={product.id}>
        <h3>{product.name}</h3>
        <img src={product.img} alt={product.name} />
        <h4>Expansão: {product.expansion}</h4>
        <span>R$ {product.price.toFixed(2)}</span>
        <AddContainer>
          <span>Quantidade:</span>
          <div>
            <button onClick={() => dispatch(addCartThunk(product))}>+</button>
            <span> {product.count}</span>
            <button onClick={() => dispatch(removeCartThunk(product.id))}>
              -
            </button>
          </div>
        </AddContainer>
      </li>
    </Container>
  );
}
