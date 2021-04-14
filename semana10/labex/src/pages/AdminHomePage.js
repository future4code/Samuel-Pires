import styled from "styled-components";
import React from 'react'
import Header from '../components/Header'
import Container from '../components/Container'
import useProtectedPage from "../hooks/useProtectedPage";
import axios from "axios";
import { baseUrl, headers } from "../parameters";
import { useParams } from "react-router-dom";

export default function AdminHomePage(){
  useProtectedPage()
  const {id} = useParams()

  const deleteTrip = async()=>{
    const token = window.localStorage.getItem('token')
    try{
      const res = await axios.delete(`${baseUrl}/trips/${id}`, headers(token))
      console.log('resposta ao excluir viagem', res)
    }
    catch(err){
      console.log('erro ao excluir resposta', err)
    }
  }
  return(
    <Container>
      {/* <Header></Header>
      <div>
        <CardTripContainer>
          <CardTripAdmin />
        </CardTripContainer>
      </div> */}
      <p>AdminHomePage</p>
    </Container>
  )
}