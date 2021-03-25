import axios from "axios";
import React from "react";
import styled from 'styled-components'
import { urlFilms } from "../urls";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Conteudo = styled.div`
  padding: 10px;
  width:320px;
  height: 430px;
  overflow: auto;
  display: flex;
  flex-direction: column;

  &>p{
    text-align: justify;
  }  
  &>h2,>h3{
    text-align: center;
  }

  &:hover{
    background-color: #eee;
  }

`

export default class Films extends React.Component{
  state={
    films : [],
  }

  componentDidMount(){
    this.getFilmes()
  }


  //API 
  getFilmes = async ()=>{
    try{
      const res = await axios.get(urlFilms)
      this.setState({films: res.data.results})
    }
    catch(error){
      alert('Estamos com problemas internos, por favor tente mais tarde.')
    }
  }


  render(){

    const renderiza = this.state.films.map((film)=>{
      return(
        <Conteudo>
          <h2>{film.title}</h2>
          <h3>{film.director}</h3>
          <p>{film.opening_crawl.replace("\n","")}</p>
        </Conteudo>
      )
    })

    return (
    <Container>
      {renderiza}
    </Container>
    )
  }
}