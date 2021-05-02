import styled from 'styled-components'

export const CAll = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`

export const All = styled.div`
  width: max(100%, 375px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
`

export const ContainerAll = styled.main`
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
`