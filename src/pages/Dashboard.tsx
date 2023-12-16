import { useEffect, useState } from "react";
import api from "../services/api";

import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { InputSearch } from "../components/InputSearch";
import { ModalAdd } from "../components/ModalAddContact";
import { ModalEdit } from "../components/ModalEditContact";

interface IContactPlate {
  id?: string;
  name: string;
  lastName: string;
  phoneNumber: number;
  created_at?: Date;
}

export function Dashboard() {
  const [contacts, setContacts] = useState<IContactPlate[]>([]);
  const [editingContact, setEditingContact] = useState<IContactPlate>(
    {} as IContactPlate
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadContacts(): Promise<void> {
      const response = await api.get("/");

      setContacts(response.data);
    }
    loadContacts();
  }, [contacts]);

  async function handleAddContact(
    contact: Omit<IContactPlate, "id">
  ): Promise<void> {
    try {
      const response = await api.post("/", {
        ...contact,
      });
      setContacts([...contacts, response.data]);
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  async function handleUpdateContact(
    contact: Omit<IContactPlate, "id">
  ): Promise<void> {
    try {
      const response = await api.put(`/${editingContact.id}`, {
        ...editingContact,
        ...contact,
      });
      setContacts(
        contacts.map((mappedContact) =>
          mappedContact.id === editingContact.id
            ? { ...response.data }
            : mappedContact
        )
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteContact(id: string): Promise<void> {
    try {
      await api.delete(`/${id}`);

      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditContact(contact: IContactPlate): void {
    const data = contacts.filter((contacts) => contacts.id == contact.id);

    setEditingContact(data[0]);
    toggleEditModal();
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <InputSearch />
      <ModalAdd
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddContact={handleAddContact}
      />
      <ModalEdit
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingContact={editingContact}
        handleUpdateContact={handleUpdateContact}
      />
      {contacts &&
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDeleteContact={handleDeleteContact}
            handleEditContact={handleEditContact}
          />
        ))}
    </>
  );
}
