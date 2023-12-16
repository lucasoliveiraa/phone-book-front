import React from "react";

import { Container, InputField } from "./styles";

export function InputText({ name, placeholder, register, ...rest }) {
  return (
    <Container>
      <InputField
        id={name}
        {...register(name)}
        {...rest}
        placeholder={placeholder}
      />
    </Container>
  );
}
