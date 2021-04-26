import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../parameters";
import styled from "styled-components";

const Main = styled.main`
  width: 400px;
  height: 600px;
  overflow: auto;
`;

const Matche = styled.div`
  padding: 0 10px;
  width: calc(100% - 2px);
  height: 70px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #e1e1e1;
  }
  :active {
    background-color: #cccccc;
  }
  > img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 20px;
  }
`;

export default function MatchsScreen(props) {
  const [matches, setMatches] = useState([]);

  //API
  const getMatches = async () => {
    try {
      const res = await axios.get(`${baseUrl}/matches`);
      setMatches(res.data.matches);
    } catch (erro) {
      console.log("erro em matchsScreen getMatches", erro);
    }
  };

  useEffect(getMatches, []);
  useEffect(() => {
    getMatches();
  }, [props.clearSwipe]);

  const listMatches = matches.map((item) => {
    return (
      <Matche>
        <img src={item.photo} />
        <p>{item.name}</p>
      </Matche>
    );
  });

  return <Main>{listMatches}</Main>;
}
