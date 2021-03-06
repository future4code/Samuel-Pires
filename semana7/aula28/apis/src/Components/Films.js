import axios from "axios";
import React from "react";
import styled from 'styled-components'
import { urlFilms } from "../urls";
import DetailsFilm from "./DetailsFilm";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Conteudo = styled.div`
  padding: 10px;
  width:320px;
  /* height: 430px; */
  /* overflow: auto; */
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
const DetailsFilmContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Back = styled.button`
  margin: 10px 0;
  text-align: center;
  padding:10px;
  border: 1px solid #3E3938;
`

export default class Films extends React.Component{
  state={
    films : [],
    screen : 'this',
    urlFilmClick: '',
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

  //DetailsFilm
  onClickFilm = (url)=>{
    this.setState({
      screen: 'DetailsFilm',
      urlFilmClick: url
    })
  }

  onClickBack = ()=>{
    this.setState({screen: 'this'})
  }

  renderizarScreen = ()=>{
    let renderiza
    if(this.state.screen === 'this'){
      renderiza = this.state.films.map((film)=>{
        return(
          <Conteudo onClick={()=>this.onClickFilm(film.url)}>
            <h2>{film.title}</h2>
            <h3>{film.director}</h3>
            <p>{film.opening_crawl.replace("\n","")}</p>
          </Conteudo>
        )
      })
    }
    else if(this.state.screen === 'DetailsFilm'){
      renderiza = <DetailsFilmContainer>
        <Back onClick={this.onClickBack}>Back</Back>
        <DetailsFilm urlFilm = {this.state.urlFilmClick}/>
        </DetailsFilmContainer>
    }
    return renderiza
  }

  render(){

    return (
    <Container>
      {this.renderizarScreen()}
    </Container>
    )
  }
}