import { useCallback } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Form } from "./styles";

import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { InputText } from "../InputText";

interface IContactPlate {
  id?: string;
  name: string;
  lastName: string;
  phoneNumber: number;
  created_at?: Date;
}

interface ICreateContactData {
  name: string;
  lastName: string;
  phoneNumber: number;
}

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddContact: (contact: IContactPlate) => Promise<void>;
}

export function ModalAdd({ isOpen, setIsOpen, handleAddContact }: Props) {
  const { handleSubmit, register, reset } = useForm<ICreateContactData>();

  const onSubmit = useCallback(
    async (contact: ICreateContactData) => {
      handleAddContact(contact);
      setIsOpen();
      reset();
    },
    [handleAddContact, setIsOpen, reset]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Novo Contato</h1>
        <InputText
          register={register}
          name="name"
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
          <p className="text">Adicionar Contato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
