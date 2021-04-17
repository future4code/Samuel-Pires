import React from "react";
import Header from "../components/Header";
import {
  ContainerStyled,
  ButtonStyled,
  SelectStyled,
  InputStyled,
  TextAreaStyled,
  FormStyled,
} from "../components/styledComponents";
import useProtectedPage from "../hooks/useProtectedPage";
import { headers } from "../assets/parameters";
import useForm from "../hooks/useForm";
import { postApi } from "../hooks/useRequest";

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

  return (
    <ContainerStyled>
      <Header />
      <FormStyled onSubmit={createTrip} width="90%">
        <InputStyled
          width="100%"
          name="name"
          required
          minLength="5"
          placeholder="Nome..."
          value={form.name}
          onChange={setForm}
        />
        <InputStyled
          width="48%"
          name="date"
          required
          type="date"
          min={dataString(new Date())}
          title="Requer uma data no futuro"
          value={form.date}
          onChange={setForm}
        />
        <InputStyled
          width="48%"
          name="durationInDays"
          required
          type="number"
          min="50"
          placeholder="Duração em dias..."
          value={form.durationInDays}
          onChange={setForm}
        />
        <SelectStyled
          width="100%"
          name="planet"
          required
          value={form.planet}
          onChange={setForm}
        >
          <option value="">Selecione um planeta...</option>
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
        </SelectStyled>
        <TextAreaStyled
          width="100%"
          name="description"
          required
          minLength="30"
          placeholder="Descrição..."
          value={form.description}
          onChange={setForm}
        />
        <ButtonStyled width="100%">Criar</ButtonStyled>
      </FormStyled>
    </ContainerStyled>
  );
}
