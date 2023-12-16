import { FaPhone, FaTrash, FaEdit } from "react-icons/fa";
import { Container, InfoContact, ContactIcons } from "./styles";

interface IContactPlate {
  id?: string;
  name: string;
  lastName: string;
  phoneNumber: number;
  created_at?: Date;
}

interface IProps {
  contact: IContactPlate;
  handleDeleteContact: (id: string) => void;
  handleEditContact: (contact: IContactPlate) => void;
}

export function Contact({
  contact,
  handleDeleteContact,
  handleEditContact,
}: IProps) {
  function setEditingContact(): void {
    console.log("====> CONTATACT", contact);
    handleEditContact(contact);
  }

  return (
    <Container>
      <InfoContact>
        <h2>
          {contact.name} {contact.lastName}
        </h2>
        <div className="icon">
          <FaPhone size={16} />
          <h3>{contact.phoneNumber}</h3>
        </div>
      </InfoContact>
      <ContactIcons>
        <button type="button" onClick={() => setEditingContact()}>
          <FaEdit size={18} />
        </button>
        <button type="button" onClick={() => handleDeleteContact(contact.id)}>
          <FaTrash size={18} />
        </button>
      </ContactIcons>
    </Container>
  );
}
