import styled from 'styled-components'

export const All = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerAll = styled.main`
  margin-top: 60px;
  width: 90%;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: ${props=>props.showDetails? 'space-around' : 'center'};
  align-items: ${props=>props.showDetails? 'flex-start' : 'center'};
`

export const Container = styled.section`
  width: ${props=>props.width? props.width : '60%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  overflow-y: auto;
`