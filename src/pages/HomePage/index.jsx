import React from "react";
import Header from "../../components/Header";
import ProductsList from "../../components/ProductsList";
import { Container } from "./style";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <ProductsList />
    </Container>
  );
}
