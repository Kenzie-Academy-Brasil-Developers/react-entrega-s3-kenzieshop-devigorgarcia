import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addCartThunk } from "../../store/modules/cart/thunk";
import { AddContainer } from "./style";

export default function Product({ product }) {
  const dispatch = useDispatch();
 
  return (
    <li key={product.id}>
      <h3>{product.name}</h3>
      <img src={product.img} alt={product.name} />
      <h4>Expansão: {product.expansion}</h4>
      <AddContainer>
        <span>R$ {product.price.toFixed(2)}</span>
        <button onClick={() => dispatch(addCartThunk(product))}>
          <FiShoppingBag />
        </button>
      </AddContainer>
    </li>
  );
}
