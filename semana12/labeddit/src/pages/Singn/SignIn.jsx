import React from 'react'
import {
  Container,
  Form,
  Title,
  Input,
  Lock,
  InputButton
} from "./styled";



export default function () {
  return (
    <Container>
      <Lock />
      <Title>Sign In</Title>
      <Form>
        <Input id="outlined-basic" label="Email" variant="outlined" required />
        <Input id="outlined-basic" label="Senha" variant="outlined" required />
        <InputButton variant={'contained'} color={'primary'}>SIGN UP</InputButton>
      </Form>
    </Container>
  );
}