import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { ContainerStyled } from "../components/styledComponents";
import useProtectedPage from "../hooks/useProtectedPage";
import { headers } from "../assets/parameters";
import CardTrip from "../components/CardTrip";
import { delApi, useGetApi } from "../hooks/useRequest";

const Cards = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
`;

export default function AdminHomePage() {
  useProtectedPage();

  const [trips, setTrips] = useState([]);
  const [getApi, setGetApi] = useGetApi();

  const getTrips = () => {
    setGetApi("/trips");
  };

  useEffect(() => {
    getTrips();
  }, []);

  useEffect(() => {
    if (getApi && getApi.data && getApi.data.trips) setTrips(getApi.data.trips);
  }, [getApi]);

  const deleteTrip = (id) => {
    const token = window.localStorage.getItem("token");
    delApi(`/trips/${id}`, headers(token), "", "", (res) => {
      getTrips();
    });
  };

  const tripsRendered = () => {
    return trips.map((trip) => {
      return <CardTrip trip={trip} del={true} deleteTrip={deleteTrip} />;
    });
  };
  return (
    <ContainerStyled>
      <Header />
      <Cards>{tripsRendered()}</Cards>
    </ContainerStyled>
  );
}
