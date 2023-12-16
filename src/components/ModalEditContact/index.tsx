import { useCallback, useEffect, useState } from "react";
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
  handleUpdateContact: (contact: Omit<IContactPlate, "id">) => void;
  editingContact: IContactPlate;
}

export function ModalEdit({
  isOpen,
  setIsOpen,
  editingContact,
  handleUpdateContact,
}: Props) {
  const { handleSubmit, register, reset } = useForm<ICreateContactData>();
  const [userData, setUserData] = useState({ ...editingContact });

  useEffect(() => {
    setUserData({ ...editingContact });
    reset(editingContact);
  }, [editingContact, reset]);

  const onSubmit = useCallback(
    async (contact: ICreateContactData) => {
      teste();
      console.log("new DATA", contact);
      handleUpdateContact(contact);
      setIsOpen();
      reset();
    },
    [handleUpdateContact, setIsOpen, reset]
  );

  function teste() {
    console.log("=========> teste", editingContact);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Atualizar Contato</h1>
        <InputText
          register={register}
          value={userData.name}
          onChange={handleInputChange}
          name={"name"}
          placeholder="Digite seu nome"
        />
        <InputText
          register={register}
          value={userData.lastName}
          onChange={handleInputChange}
          name="lastName"
          placeholder="Digite seu sobrenome"
        />
        <InputText
          register={register}
          value={userData.phoneNumber}
          onChange={handleInputChange}
          name="phoneNumber"
          placeholder="Digite seu numero telefonico"
        />
        <button type="submit">
          <p className="text">Atualizar contato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
