import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  background: #fff;
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 16px;
`;

export const InfoContact = styled.div`
  display: flex;
  flex-direction: column;

  .icon {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 6px;
    color: #a9a9a9;
    padding: 4px;

    h3 {
      font-weight: 600;
      color: #a9a9a9;
      font-size: 14px;
      margin-left: 6px;
    }
  }
  h2 {
    font-weight: 600;
    color: black;
    font-size: 20px;
    text-transform: capitalize;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  button {
    display: flex;
    align-items: center;
    font-weight: 600;
    border-radius: 4px;
    border: 0;
    background: #1e90ff;
    color: #fff;
    padding: 10px;
  }
  button:nth-of-type(2) {
    background: red;
    margin-left: 6px;
  }
`;
