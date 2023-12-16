import React, { useState } from "react";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { ModalAdd } from "../components/ModalAddContact";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    console.log("ADDDDD");
    setModalOpen(!modalOpen);
  }
  return (
    <>
      <Header openModal={toggleModal} />
      <Input />
      <ModalAdd isOpen={modalOpen} setIsOpen={toggleModal} />
      <Contact />
      <Contact />
    </>
  );
}
