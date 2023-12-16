import { useCallback, useEffect, useState } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Form } from "./styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Nome é obrigatório")
    .min(2, "No mínimo 2 caracteres")
    .max(30, "No máximo 30 caracteres"),
  lastName: Yup.string()
    .required("Sobrenome é obrigatório")
    .min(2, "No mínimo 2 caracteres")
    .max(50, "No máximo 50 caracteres"),
  phoneNumber: Yup.number()
    .required("Telefone é obrigatório")
    .moreThan(9999999999, "No mínimo 11 dígitos")
    .typeError("Informe o número do telefone"),
});

export function ModalEdit({
  isOpen,
  setIsOpen,
  editingContact,
  handleUpdateContact,
}: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ICreateContactData>({
    resolver: yupResolver(schema),
  });
  const [userData, setUserData] = useState({ ...editingContact });

  useEffect(() => {
    setUserData({ ...editingContact });
    reset(editingContact);
  }, [editingContact, reset]);

  const onSubmit = useCallback(
    async (contact: ICreateContactData) => {
      handleUpdateContact(contact);
      setIsOpen();
      reset();
    },
    [handleUpdateContact, setIsOpen, reset]
  );

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
          error={errors.name && errors.name.message}
        />
        <InputText
          register={register}
          value={userData.lastName}
          onChange={handleInputChange}
          name="lastName"
          placeholder="Digite seu sobrenome"
          error={errors.lastName && errors.lastName.message}
        />
        <InputText
          register={register}
          value={userData.phoneNumber}
          onChange={handleInputChange}
          name="phoneNumber"
          placeholder="Digite seu numero telefonico"
          error={errors.phoneNumber && errors.phoneNumber.message}
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
