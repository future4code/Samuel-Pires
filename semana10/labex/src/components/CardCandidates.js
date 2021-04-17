import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { headers } from "../assets/parameters";
import { putApi } from "../hooks/useRequest";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
  padding: 10px;
  border: 1px solid white;
  margin-bottom: 5px;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;

export default function CardCandidates(props) {
  const [lista, setLista] = useState([]);

  const decideCandidate = (candidateId, approve) => {
    const token = window.localStorage.getItem("token");
    const body = { approve };
    putApi(
      `/trips/${props.id}/candidates/${candidateId}/decide`,
      body,
      headers(token),
      "Erro. Por favor tente novamente mais tarde",
      "",
      (res) => {
        props.decide();
      }
    );
  };

  const confirm = (id, approve) => {
    if (window.confirm("Tem certeza?")) decideCandidate(id, approve);
  };

  const list = () => {
    if (props && props.candidates) {
      return props.candidates.map((candidate) => {
        return (
          <Container key={candidate.id}>
            <Card>
              <p>Nome: {candidate.name}</p>
              <p>Idade: {candidate.age}</p>
              <p>Profissão: {candidate.profesion}</p>
              <p>País: {candidate.country}</p>
              <p>{candidate.applicationText}</p>
            </Card>
            <button onClick={() => confirm(candidate.id, false)}>
              Reprovar
            </button>
            <button onClick={() => confirm(candidate.id, true)}>Aprovar</button>
          </Container>
        );
      });
    }
  };

  useEffect(() => {
    setLista(list());
  }, [props]);

  return <>{lista}</>;
}
