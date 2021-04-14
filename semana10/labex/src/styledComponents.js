import styled from 'styled-components'

export const ContainerStyled= styled.div`
  width: 100vw;
  min-height: 100vh;
  div{
    width: min(900px, 90%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ButtonStyled = styled.button`
  border: 0;
  background-color: #A7A9AC;
  border-radius: 20px;
  padding: 10px;
  :hover{
    background-color: rgba(0, 82, 136, 0.9);
  }
  :active{
    background-color: rgba(0, 82, 136, 1);
  }
  box-shadow: 2px 1px black;
`

export const LogoStyled = styled.div`
  width: 512px;
  height: 512px;
  display: flex;
  align-items: center;
  justify-content: center;
    img{
      width: 100%;
      max-height: 100%;
    }
`

export const MiniLogoStyled = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`