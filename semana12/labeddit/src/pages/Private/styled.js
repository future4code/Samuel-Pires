import styled from 'styled-components'

export const All = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Container = styled.section`
  margin-top: 60px;
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`