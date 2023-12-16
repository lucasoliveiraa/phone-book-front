import styled from "styled-components";

export const Container = styled.div`
  background: #e2e2e2;
  padding: 30px 0;
`;

export const Content = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0 0 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  div {
    color: black;
  }

  h1 {
    font-weight: 600;
    color: black;
    margin-left: 8px;
    font-size: 40px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 600;
    color: black;
  }
  nav {
    div {
      button {
        font-weight: 600;
        border-radius: 8px;
        border: 0;
        background: #1e90ff;
        color: #fff;

        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 32px;
      }
    }
  }
`;
