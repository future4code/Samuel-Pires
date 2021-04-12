import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`
const Busca = styled.input`
  width: max(300px, 42%);
  height: 100%;
`
const Data = styled.input`
  width: max(100px, 11%);
`
const Duration = styled.input`
  width: max(80px, 10%);
`
export default function Filter(){
  return(
    <Container>
      <Busca placeholder='Buscar por nome, descrição ou planeta...'/>
      <Data placeholder='Data de:' type='date'/>
      <Data placeholder='Data até:' type='date'/>
      <Duration placeholder='Duração' type='number'/>
    </Container>
  )
}