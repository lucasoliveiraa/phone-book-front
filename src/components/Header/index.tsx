import { FiPlus } from "react-icons/fi";
import { FaAddressBook } from "react-icons/fa";
import { Container, Content, Nav, Title } from "./styles";

interface IProps {
  openModal: () => void;
}

export function Header({ openModal }: IProps) {
  return (
    <Container>
      <Content>
        <Title>
          <div>
            <FaAddressBook size={40} />
          </div>
          <h1>Phone Book App</h1>
        </Title>
        <Nav>
          <h1>Contacts</h1>
          <nav>
            <div>
              <button type="button" onClick={openModal}>
                <div>
                  <FiPlus size={24} />
                </div>
                <div>Add Contact</div>
              </button>
            </div>
          </nav>
        </Nav>
      </Content>
    </Container>
  );
}
