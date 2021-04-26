import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const ContainerAll = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 49.5%;
  margin-bottom: 10px;
  height: 300px;
  max-height: 500px;
  box-shadow: 2px 2px 2px black;
  border-radius: 5px;
  :hover {
    box-shadow: 10px 10px 10px black;
  }
  overflow: auto;
  a {
    text-decoration: none;
  }
  background-color: #001523;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const P = styled.div`
  color: #708090;
  padding: 5px;
  p {
    color: white;
    /* display: inline; */
  }
`;

const Svg = styled.svg`
  min-width: 50px;
  max-width: 50px;
  padding: 10px;
  margin-right: 10px;
  fill: currentColor;
  color: #002c3b;
  transition: all 0.3s;
  :hover {
    border-radius: 25px;
    background-color: #909294;
    color: #002430;
    transform: scale(1.3);
  }
`;

export default function CardTrip(props) {
  const { id, name, description, planet, durationInDays, date } = props.trip;

  const render = (
    <Container key={id}>
      <P>
        Nome <p>{name}</p>
      </P>
      <P>
        Planeta <p>{planet}</p>
      </P>
      <P>
        Duração <p>{durationInDays} dias</p>
      </P>
      <P>
        Data <p>{date}</p>
      </P>
      <P>
        Descrição <p>{description}</p>
      </P>
    </Container>
  );

  return (
    <ContainerAll>
      {props.render ? (
        <Link to={`/admin/trips/${id}`}>{render}</Link>
      ) : (
        <Link to={`/trips/application`}>{render}</Link>
      )}
      {props.del && (
        <Svg
          onClick={() => props.deleteTrip(id)}
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
        </Svg>
      )}
    </ContainerAll>
  );
}
