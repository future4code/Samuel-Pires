import styled from 'styled-components'

export const CAll = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`

export const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #DAE0E6;
`

export const ContainerAll = styled.main`
  min-width: 360px;
  max-width: 800px;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: ${props=>props.showDetails? 'space-around' : 'center'};
  align-items: ${props=>props.showDetails? 'flex-start' : 'center'};
`

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
`

export const Votes = styled.div`
  margin-top: 30px;
  border: 1px solid #878A8C;
  background-color: white;
  padding: 10px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  :hover {
    border: 1px solid #6f6f6f;
  }
`