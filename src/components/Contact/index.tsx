import { FaPhone, FaTrash, FaEdit } from "react-icons/fa";
import { Container, InfoContact, ContactIcons } from "./styles";

interface IContactPlate {
  id: string;
  name: string;
  lastName: string;
  phoneNumber: string;
}

interface IProps {
  contact: IContactPlate;
  handleDelete: (id: string) => void;
  handleEditContact: (contact: IContactPlate) => void;
}

export function Contact({ contact, handleDelete, handleEditContact }: IProps) {
  function setEditingContact(): void {
    console.log("EDITAR CONTACT");
    handleEditContact(contact);
  }

  return (
    <Container>
      <InfoContact>
        <h2>lucas oliveiraaaaaaaaa</h2>
        <div className="icon">
          <FaPhone size={16} />
          <h3>99999999999</h3>
        </div>
      </InfoContact>
      <ContactIcons>
        <button type="button" onClick={() => setEditingContact()}>
          <FaEdit size={18} />
        </button>
        <button type="button" onClick={() => handleDelete(contact.id)}>
          <FaTrash size={18} />
        </button>
      </ContactIcons>
    </Container>
  );
}
