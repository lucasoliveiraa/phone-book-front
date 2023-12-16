import { UseFormRegister } from "react-hook-form";

import { Container, InputField } from "./styles";

type Inputs = {
  name: string;
  placeholder: string;
  value?: string | number | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<any>;
};

export function InputText({
  name,
  placeholder,
  register,
  value,
  onChange,
  ...rest
}: Inputs) {
  return (
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
  );
}
