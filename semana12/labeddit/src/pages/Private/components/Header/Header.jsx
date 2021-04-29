import React from 'react'
import {Container} from "./styled";
import {MyButton} from "./styledMaterial";
import Logo from "../../../logo/Logo";
import Search from "../Search/Search";
import {useHistory} from 'react-router-dom'

export default function ({idValue, idSetValue}){
  const history = useHistory()

  const logout=()=>{
    window.localStorage.removeItem('token')
    history.push('/signin')
  }
  return(
    <Container>
      <Logo small/>
      <Search idValue={idValue} idSetValue={idSetValue}/>
      <MyButton variant="outlined" onClick={logout}>Logout</MyButton>
    </Container>
  )
}