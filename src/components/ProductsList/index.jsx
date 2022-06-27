import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./style";

import Product from "../Product";
export default function ProductsList() {
  const productList = useSelector((store) => store.products);
  const input = useSelector((store) => store.input);
  
  return (
    <Container>
      <ul>
        {productList
          .filter((product) =>
            product.name.toLowerCase().includes(input.toLowerCase())
          )
          .map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </ul>
    </Container>
  );
}
