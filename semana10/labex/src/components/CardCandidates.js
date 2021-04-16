import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import { baseUrl, headers } from '../assets/parameters'
import {ContainerStyled} from './styledComponents'

export default function CardCandidates(props){
  const [lista, setLista] = useState([])
  
  const decideCandidate = async(candidateId, approve)=>{
    const token = window.localStorage.getItem('token')
    const body = {approve}
    try{
      await axios.put(`${baseUrl}/trips/${props.id}/candidates/${candidateId}/decide`, body, headers(token))
    }
    catch(err){
      console.log('erro ao decidir candidato', err)
    }
  }

  const list = ()=>{
    console.log('props.candidates: ', props.candidates)
    if(props && props.candidates){
      return props.candidates.map((candidate)=>{
        return(
          <div key={candidate.id}>
            <p>Nome: {candidate.name}</p>
            <p>Idade: {candidate.age}</p>
            <p>Profissão: {candidate.profesion}</p>
            <p>País: {candidate.country}</p>
            <p>{candidate.applicationText}</p>
            <button onClick={()=>decideCandidate(candidate.id, false)}>Reprovar</button>
            <button onClick={()=>decideCandidate(candidate.id, true)}>Aprovar</button>
          </div>
        )
      })
    }
  }

  useEffect(()=>{
    setLista(list())
  },[props])

  return(
    <div>
      {lista}
    </div>
  )
}