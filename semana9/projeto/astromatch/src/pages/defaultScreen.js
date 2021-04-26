import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { baseUrl } from "../parameters";

const Main = styled.main`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #752C92;
  font-size: 30px;
  font-weight: bold;
`;

const PhotoAndDescription = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    :nth-child(1) {
      height: 400px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
        max-height: 100%;
      }
    }
  }
`;

const Description = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 10px;
  color: #3e9f92;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > div {
    h2,
    p {
      display: inline;
    }
  }
  > p {
    padding: 0 10px 0 0;
  }
`;

const Buttons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button {
    width: 56px;
    height: 56px;
    border-radius: 28px;
    font-size: 30px;
    color: red;
    :hover {
      transform: scale(1.3);
      transition: all 0.3s;
    }
    :nth-child(1) {
      border: 1px solid red;
      :hover {
        color: white;
        background-color: red;
      }
    }
    :nth-child(2) {
      border: 1px solid green;
      :hover {
        background-color: green;
      }
    }
  }
`;

const DefaultScreen = (props) => {
  const [profileChoose, setProfileChoose] = useState({});
  const [loading, setLoading] = useState(true);

  //API
  const getProfileChoose = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/person`);
      setProfileChoose(res.data.profile);
      setLoading(false);
    } catch (erro) {
      console.log("erro em default screen getProfileChoose", erro);
    }
  };

  const choosePerson = async (id, choice) => {
    const body = {
      id: id,
      choice: choice,
    };
    try {
      const res = await axios.post(`${baseUrl}/choose-person`, body);
    } catch (erro) {
      console.log("erro em default screen choosePerson", erro);
    }
  };

  //interação com usuário
  const onClickMatch = (id, choice) => {
    choosePerson(id, choice);
    getProfileChoose();
  };

  const useMountEffect = (call) => useEffect(call, []); //Uma espécie de "didMount"
  useMountEffect(getProfileChoose);
  useEffect(() => {
    getProfileChoose();
  }, [props.clearSwipe]);

  return (
    <Main>
      {loading && <Loading>Loading...</Loading>}
      {!loading && profileChoose !== null && (
        <>
          <PhotoAndDescription imagem={profileChoose.photo}>
            <div>
              <img src={profileChoose.photo} />
            </div>
            <Description>
              <div>
                <h2>{profileChoose.name},</h2>
                <p> {profileChoose.age}</p>
              </div>
              <p>{profileChoose.bio}</p>
            </Description>
          </PhotoAndDescription>

          <Buttons>
            <button onClick={() => onClickMatch(profileChoose.id, false)}>
              X
            </button>
            <button onClick={() => onClickMatch(profileChoose.id, true)}>
              ❤
            </button>
          </Buttons>
        </>
      )}
    </Main>
  );
};

export default DefaultScreen;
