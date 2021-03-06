import styled from "styled-components";
import React from "react";
import labex from "../img/labex.png";
import { ButtonStyled, LogoStyled } from "../components/styledComponents";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000c14;
`;

const DivButtons = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Button = styled(ButtonStyled)`
  width: 300px;
  height: 100px;
  font-size: 30px;
`;

export default function () {
  return (
    <Container>
      <LogoStyled>
        <img src={labex} />
      </LogoStyled>
      <DivButtons>
        <Link to="/trips/list">
          <Button>Viagens</Button>
        </Link>
        <Link to="/login">
          <Button primary>Admin</Button>
        </Link>
      </DivButtons>
    </Container>
  );
}
