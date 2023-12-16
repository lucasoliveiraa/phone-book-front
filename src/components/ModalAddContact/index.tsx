import { React } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Form } from "./styles";

import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { InputText } from "../InputText";

interface ICreateFoodData {
  name: "awdawdws";
}

type Props = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export function ModalAdd({ isOpen, setIsOpen }: Props) {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data: ICreateFoodData) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Novo Contato</h1>
        <InputText
          register={register}
          name="fristName"
          placeholder="Digite seu nome"
        />
        <InputText
          register={register}
          name="lastName"
          placeholder="Digite seu sobrenome"
        />
        <InputText
          register={register}
          name="phoneNumber"
          placeholder="Digite seu numero telefonico"
        />
        <button type="submit">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
