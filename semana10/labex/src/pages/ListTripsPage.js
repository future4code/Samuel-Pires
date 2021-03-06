import Header from "../components/Header";
import Filter from "../components/Filter";
import CardTrip from "../components/CardTrip";
import styled from "styled-components";
import { CardsStyled, ContainerStyled } from "../components/styledComponents";
import React, { useEffect, useState } from "react";
import { useGetApi } from "../hooks/useRequest";

const Container = styled(ContainerStyled)`
  > div {
    align-self: center;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  overflow: auto;
`;
export default function ListTripsPage() {
  const [trips, setTrips] = useState([]);
  const [tripsFiltered, setTripsFiltered] = useState([]);
  const [getApi, setGetApi] = useGetApi("Erro ao obter viagens");

  const getTrips = () => {
    setGetApi("/trips");
  };

  useEffect(() => {
    getTrips();
  }, []);

  useEffect(() => {
    if (getApi && getApi.data && getApi.data.trips) {
      setTrips(getApi.data.trips);
      setTripsFiltered(getApi.data.trips);
    }
  }, [getApi]);

  const tripsRendered = () => {
    return tripsFiltered.map((trip) => {
      return <CardTrip trip={trip} />;
    });
  };

  return (
    <Container>
      <Header />
      <div>
        <Filter trips={trips} setTripsFiltered={setTripsFiltered} />
        <CardsStyled>{tripsRendered()}</CardsStyled>
      </div>
    </Container>
  );
}
