import { UseFormRegister } from "react-hook-form";

import { Container, InputField, Error } from "./styles";

type Inputs = {
  name: string;
  placeholder: string;
  value?: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<any>;
  error?: string;
};

export function InputText({
  name,
  placeholder,
  register,
  value,
  onChange,
  error,
  ...rest
}: Inputs) {
  return (
    <>
      <Container>
        <InputField
          id={name}
          {...register(name)}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
}
