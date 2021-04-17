import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import { InputStyled } from "./styledComponents";

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
`;

export default function Filter(props) {
  const [busca, setBusca] = useInput(order);
  const [trips, setTrips] = useState([]);

  function order() {
    const newTrips = trips.filter((trip) => {
      let { name, date, planet, durationInDays, description } = trip;
      name = name.toLowerCase();
      planet = planet.toLowerCase();
      description = description.toLowerCase();
      const newBusca = busca.toLowerCase();

      if (
        name.includes(newBusca) ||
        planet.includes(newBusca) ||
        description.includes(newBusca) ||
        newBusca === ""
      ) {
        return true;
      }
    });

    props.setTripsFiltered(newTrips);
  }

  useEffect(() => {
    setTrips(props.trips);
    console.log("props.trips", props.trips);
  }, [props.trips]);

  return (
    <Container>
      <InputStyled
        width="90%"
        placeholder="Buscar por nome, descrição ou planeta..."
        value={busca}
        onChange={setBusca}
      />
    </Container>
  );
}
