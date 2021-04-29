import React from 'react'
import {
  Form, Title, Text, Button
} from "./styled";
import {MySendIcon} from "./styledMaterial";

export default function WritePost(){

  return(
    <Form>
      <Title placeholder={'Título...'}/>
      <Text placeholder={'Escreva seu post...'}/>
      <Button><MySendIcon/></Button>
    </Form>
  )
}