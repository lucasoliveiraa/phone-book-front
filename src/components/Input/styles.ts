import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const InputContainer = styled.div`
  width: 1280px;
  margin: 20px auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  flex: 1;
  color: transparent;
  color: #202020;
  &::placeholder {
    font-weight: 600;
    color: #a9a9a9;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: #a9a9a9;
  margin: 0 8px;
  display: ${(props) => (props.hideIcon ? "none" : "block")};
`;
