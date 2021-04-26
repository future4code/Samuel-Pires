import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardCandidates from "../components/CardCandidates";
import CardTrip from "../components/CardTrip";
import { ContainerStyled } from "../components/styledComponents";
import useProtectedPage from "../hooks/useProtectedPage";
import { headers } from "../assets/parameters";
import Header from "../components/Header";
import { useGetApi } from "../hooks/useRequest";

export default function TripDetailsPage() {
  useProtectedPage();
  const { id } = useParams();
  const [trip, setTrip] = useState({});
  const [getApi, setGetApi] = useGetApi();

  const getTripDetail = () => {
    const token = window.localStorage.getItem("token");
    setGetApi(`/trip/${id}`, headers(token));
  };

  const decide = () => {
    getTripDetail();
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  useEffect(() => {
    if (getApi && getApi.data && getApi.data.trip) setTrip(getApi.data.trip);
  }, [getApi]);

  return (
    <ContainerStyled>
      <Header />
      <CardTrip trip={trip} render={true} />
      <CardCandidates candidates={trip.candidates} id={id} decide={decide} />
    </ContainerStyled>
  );
}
