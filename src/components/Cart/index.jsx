import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../CartProduct";
import {
  CartContainer,
  Container,
  ListContainer,
  ProductsContainer,
  ResumeContainer,
} from "./style";
import { BsCartXFill } from "react-icons/bs";

export default function Cart() {
  const { cart } = useSelector((store) => store);

  const totalValue = cart.reduce(
    (acc, cart) => acc + cart.price * cart.count,
    0
  );

  const totalAmount = cart.reduce((acc, cart) => acc + cart.count, 0);

  return (
    <>
      <Container>
        <h2>Carrinho de Compras</h2>
        <CartContainer>
          {cart.length !== 0 ? (
            <>
              <ListContainer>
                <div>
                  <h2>Produtos Selecionados</h2>
                </div>
                <ul>
                  {cart.map((product) => {
                    return (
                      <CartProduct key={product.id} product={product} onCart />
                    );
                  })}
                </ul>
              </ListContainer>
              <ResumeContainer>
                <h2>Resumo Carrinho</h2>
                <div>
                  <p>
                    Quantidade:<span>{totalAmount}</span>
                  </p>
                  <p>
                    Valor Total: <span>R$ {totalValue.toFixed(2)}</span>
                  </p>
                </div>
              </ResumeContainer>
            </>
          ) : (
            <ListContainer
              height={"50vh"}
              align={"center"}
              justify={"center"}
              direction={"column"}
            >
              <BsCartXFill size={80} opacity={"50%"} /> <h3>Carrinho Vazio</h3>
            </ListContainer>
          )}
        </CartContainer>
      </Container>
    </>
  );
}
