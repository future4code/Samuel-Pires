import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Jomhuria&display=swap');
  font-family: 'Jomhuria', cursive;
  font-size: ${props => props.font ? props.font : '50px'};
  color: #ff4500;
  cursor: pointer;
`

export default function (props){
  const history = useHistory()
  return(
    <Container font={props.font} onClick={()=>{history.push('/')}}>
      <p>Labeddit</p>
    </Container>
  )
}