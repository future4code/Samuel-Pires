import React, { useState, useEffect } from "react";
import { headers } from "../assets/parameters";
import { putApi } from "../hooks/useRequest";

export default function CardCandidates(props) {
  const [lista, setLista] = useState([]);

  const decideCandidate = (candidateId, approve) => {
    const token = window.localStorage.getItem("token");
    const body = { approve };
    putApi(
      `/trips/${props.id}/candidates/${candidateId}/decide`,
      body,
      headers(token),
      'Erro. Por favor tente novamente mais tarde',
      '',
      (res)=>{props.decide()}
    );
  };

  const list = () => {
    console.log("props.candidates: ", props.candidates);
    if (props && props.candidates) {
      return props.candidates.map((candidate) => {
        return (
          <div key={candidate.id}>
            <p>Nome: {candidate.name}</p>
            <p>Idade: {candidate.age}</p>
            <p>Profissão: {candidate.profesion}</p>
            <p>País: {candidate.country}</p>
            <p>{candidate.applicationText}</p>
            <button onClick={() => decideCandidate(candidate.id, false)}>
              Reprovar
            </button>
            <button onClick={() => decideCandidate(candidate.id, true)}>
              Aprovar
            </button>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    setLista(list());
  }, [props]);

  return <div>{lista}</div>;
}
