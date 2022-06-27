import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { InputContainer, SearchButton } from "./style";
import { useDispatch } from "react-redux";
import { changeInput } from "../../store/modules/input/action";
export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleInput(input) {
    setInput(input);
    dispatch(changeInput(input));
  }

  return (
    <>
      <InputContainer>
        <BiSearchAlt2 size={22} color="var(--red)" />
        <input
          type="text"
          placeholder="Procure o seu MMORPG"
          onChange={(e) => handleInput(e.target.value)}
        />
      </InputContainer>
    </>
  );
}
