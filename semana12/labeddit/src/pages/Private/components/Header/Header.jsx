import React from 'react'
import {Container} from "./styled";
import {MyButton} from "./styledMaterial";
import Logo from "../../../logo/Logo";

export default function (props){
  return(
    <Container>
      <Logo small/>
      <MyButton variant="outlined">Logout</MyButton>
    </Container>
  )
}