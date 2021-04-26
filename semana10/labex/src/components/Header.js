import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { MiniLogoStyled } from "./styledComponents";
import labexMini from "../img/labex-mini.png";

const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-image: linear-gradient(black, #002430, #000c14);
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      padding: 10px;
      margin-left: 10px;
      :nth-child(6) {
        border: 1px solid white;
      }
    }
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: white;
    :hover {
      color: #a7a9ac;
    }
  }
`;

export default function Header() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const history = useHistory();
  const logout = () => {
    window.localStorage.removeItem("token");
    setToken(null);
    history.push("/");
  };
  return (
    <Container>
      <MiniLogoStyled>
        <Link to="/">
          <img src={labexMini} />
        </Link>
      </MiniLogoStyled>
      <Nav>
        <ul>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/trips/list">
              <p>Viagens</p>
            </Link>
          </li>
          <li>
            <Link to="/trips/application">Inscrever-se</Link>
          </li>
          {token ? (
            <li>
              <Link to="/admin/trips/list">Admin</Link>
            </li>
          ) : (
            <></>
          )}
          {token ? (
            <li>
              <Link to="/admin/trips/create">Criar</Link>
            </li>
          ) : (
            <></>
          )}
          {token ? (
            <li>
              <a onClick={logout}>Logout</a>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </Nav>
    </Container>
  );
}
