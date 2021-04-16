import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonStyled = styled.button`
  border: 0;
  background-color: ${(props) => (props.primary ? "#A7A9AC" : "#003759")};
  border-radius: 10px;
  padding: 10px;
  color: white;
  :hover {
    background-color: ${(props) =>
      props.primary ? "rgba(121, 122, 124, 1)" : "rgba(0, 82, 136, 0.9)"};
  }
  :active {
    background-color: ${(props) =>
      props.primary ? "rgba(121, 122, 124, 0.9)" : "rgba(0, 82, 136, 1)"};
  }
  box-shadow: 2px 1px 5px black;
  margin: 5px 0;
  font-size: ${props=>props.fsize};
  width: ${props=>props.width};
  margin-right: ${props=>props.mright};
  margin-left: ${props=>props.mleft};
`;

export const LogoStyled = styled.div`
  width: 512px;
  height: 512px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-height: 100%;
  }
`;

export const MiniLogoStyled = styled.div`
  width: 150px;
  height: 60px;
  img {
    width: 150px;
    height: 50px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectStyled = styled.select`
  width: ${props=>props.width};
  height: 60px;
  margin: 5px 0;
  margin-right: ${props=>props.mright};
  margin-left: ${props=>props.mleft};
`

export const InputStyled = styled.input`
  width: ${props=>props.width};
  margin: 5px 0;
  margin-right: ${props=>props.mright};
  margin-left: ${props=>props.mleft};
  height: 60px;
  border-radius: 5px;
  padding-left: 10px;
  border: 2px solid #005288;
  :hover{
    box-shadow: 0 0 5px #003759;
  }
`

export const TextAreaStyled = styled.textarea`
  width: ${props=>props.width};
  height: 300px;
  border: 2px solid #005288;
  padding: 10px;
  :hover{
    box-shadow: 0 0 5px #003759;
  }
  margin: 5px 0;
  margin-right: ${props=>props.mright};
  margin-left: ${props=>props.mleft};
  border-radius: 5px;
`

export const FormStyled = styled.form`
  width: ${props=>props.width};
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const CardsStyled = styled.div`
  width: 90%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
`