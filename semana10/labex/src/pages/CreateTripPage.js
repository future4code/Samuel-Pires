import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { ContainerStyled, ButtonStyled } from "../components/styledComponents";
import useProtectedPage from "../hooks/useProtectedPage";
import { headers } from "../assets/parameters";
import useForm from "../hooks/useForm";
import { postApi } from "../hooks/useRequest";

const InputA = styled.input`
  width: 100%;
`;
const InputB = styled.input`
  width: 48%;
`;
const Planet = styled.select`
  width: 100%;
`;
const Text = styled.textarea`
  width: 100%;
  height: 300px;
`;
const Button = styled(ButtonStyled)`
  width: 100%;
  margin-top: 10px;
  font-size: 17px;
`;
const Form = styled.form`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const initialForm = {
  name: "",
  planet: "",
  date: "",
  description: "",
  durationInDays: "",
};

export default function CreateTripPage() {
  useProtectedPage();
  const [form, setForm, clearForm] = useForm(initialForm);
  const data = new Date();

  const dataString = (data) => {
    console.log("data", data);
    const year = data.getFullYear().toString();

    let month;
    if (data.getMonth() + 1 < 10)
      month = "0" + (data.getMonth() + 1).toString();
    else month = (data.getMonth() + 1).toString();

    let day;
    if (data.getDate() + 1 < 10) day = "0" + (data.getDate() + 1).toString();
    else day = (data.getDate() + 1).toString();

    return year + "-" + month + "-" + day;
  };

  const createTrip = (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem("token");
    postApi(
      `/trips`,
      form,
      headers(token),
      "Erro ao criar viagem, por favor tente novamente mais tarde",
      "Sucesso ao criar viagem!"
    );
    clearForm();
  };

  console.log("form  data", form.date);
  console.log("dataString", dataString(new Date()));
  return (
    <ContainerStyled>
      <Header />
      <Form onSubmit={createTrip}>
        <InputA
          name="name"
          required
          minLength="5"
          placeholder="Nome..."
          value={form.name}
          onChange={setForm}
        />
        <InputB
          name="date"
          required
          type="date"
          min={dataString(new Date())}
          title="Requer uma data no futuro"
          value={form.date}
          onChange={setForm}
        />
        <InputB
          name="durationInDays"
          required
          type="number"
          min="50"
          placeholder="Duração em dias..."
          value={form.durationInDays}
          onChange={setForm}
        />
        <Planet name="planet" required value={form.planet} onChange={setForm}>
          <option value=""></option>
          <option value="Mercury">Mercury</option>
          <option value="Venus">Venus</option>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Mercury">Mercury</option>
          <option value="Saturn">Mercury</option>
          <option value="Uranus">Uranus</option>
          <option value="Neptune">Neptune</option>
          <option value="Pluto">Pluto</option>
        </Planet>
        <Text
          name="description"
          required
          minLength="30"
          placeholder="Descrição..."
          value={form.description}
          onChange={setForm}
        />
        <Button>Criar</Button>
      </Form>
    </ContainerStyled>
  );
}
