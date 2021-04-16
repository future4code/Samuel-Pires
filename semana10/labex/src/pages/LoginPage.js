import styled from "styled-components";
import React from "react";
import { ButtonStyled, LogoStyled } from "../components/styledComponents";
import labex from "../img/labex.png";
import { Link, useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { postApi } from "../hooks/useRequest";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivInputs = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > input {
    padding: 20px;
    margin-bottom: 10px;
  }
`;
const Button = styled(ButtonStyled)`
  border-radius: 5px;
  box-shadow: 0px 0px 3px black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    padding: 20px;
    margin-bottom: 10px;
  }
`;

const initialForm = {
  email: "",
  password: "",
};

export default function () {
  const [form, setForm, clearForm] = useForm(initialForm);
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    postApi("/login", form, null, "", "", (res) => {
      window.localStorage.setItem("token", res.data.token);
      history.push("/admin/trips/list");
    });
    clearForm();
  };

  return (
    <Container>
      <LogoStyled>
        <Link to="/">
          <img src={labex} />
        </Link>
      </LogoStyled>
      <Form onSubmit={login}>
        <input
          required
          name="email"
          value={form.email}
          onChange={setForm}
          placeholder="Email"
          pattern="/^[a-z0-9.]+@[a-z0-9]+\.[a-z]\"
          title="Tipo e-mail necessário x@x.x"
        />
        <input
          required
          name="password"
          value={form.password}
          onChange={setForm}
          placeholder="Senha"
          type="password"
        />
        <Button>Login</Button>
      </Form>
    </Container>
  );
}
