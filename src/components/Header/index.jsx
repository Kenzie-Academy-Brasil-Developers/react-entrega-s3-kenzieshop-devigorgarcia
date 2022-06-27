import React from "react";
import { ButtonsContainer, HeaderContainer, SearchContainer } from "./style";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar";

export default function Header() {
  const history = useHistory();
  const { cart } = useSelector((store) => store);

  const totalAmount = cart.reduce((acc, cart) => acc + cart.count, 0);

  function handleNavigation(path) {
    return history.push(path);
  }

  return (
    <>
      <HeaderContainer>
        <h1 onClick={() => handleNavigation("/")}>KenzieShop</h1>
        <ButtonsContainer>
          <button onClick={() => handleNavigation("/CartPage")}>
            <span>{totalAmount}</span>
            <FiShoppingCart size={16} />
            Shop
          </button>
          <button>
            <FiLogIn size={16} /> Entrar
          </button>
        </ButtonsContainer>
      </HeaderContainer>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
    </>
  );
}
