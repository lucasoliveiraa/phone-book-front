import { useState } from "react";
import { InputContainer, SearchIcon, StyledInput } from "./styles";

export function InputSearch({ ...rest }) {
  const [isInputSelected, setIsInputSelected] = useState(false);

  const handleInputFocus = () => {
    setIsInputSelected(true);
  };

  const handleInputBlur = () => {
    setIsInputSelected(false);
  };

  return (
    <InputContainer>
      <SearchIcon hideIcon={isInputSelected} />
      <StyledInput
        type="text"
        placeholder="Search for contact by last name"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </InputContainer>
  );
}
