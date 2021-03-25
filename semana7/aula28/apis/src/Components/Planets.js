import axios from "axios";
import React from "react";
import styled from 'styled-components'
import { urlFilms, urlPlanets } from "../urls";

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

  &:hover{
    background-color: #ddd;
  }

`

export default class Planets extends React.Component{
  state={
    planets : [],
    titleAndUrl: []
  }

  componentDidMount(){
    this.getPlanets()
    this.getFilmes()
  }

  //API
  getPlanets = async ()=>{
    try{
      let res = await axios.get(urlPlanets)
      let newPlanets = res.data.results
      while(res.data.next !==null){
        res = await axios.get(res.data.next)
        newPlanets = [...newPlanets, ...res.data.results]
      }
      this.setState({planets: newPlanets})
    }
    catch(error){
      alert('Estamos com problemas internos, por favor tente novamente mais tarde.')
    }
  }

  getFilmes = async ()=>{
    try{
      const res = await axios.get(urlFilms)
      const films = res.data.results
      const newTitleAndUrl = films.map((film)=>{
        return {
          title: film.title,
          url: film.url
        }
      })
      this.setState({titleAndUrl: newTitleAndUrl})
    }
    catch(error){
      alert('Estamos com problemas internos, por favor tente mais tarde.')
    }
  }

  liFilm = (filmsUrl)=>{
    let listaFilms = []
    for(let i=0; i<filmsUrl.length; i++){
      const aux = this.state.titleAndUrl.filter((film)=>{
        
        if(filmsUrl[i] === film.url){
          return true
        }
        else return false
      })

      listaFilms = [...listaFilms, ...aux]
    }
    const li = listaFilms.map((film)=>{
      return <li>
        {film.title}
      </li>
    })

    return li;
  }


  render(){

    const renderiza = this.state.planets.map((planet)=>{
      return(
        <Conteudo>
          <h2>{planet.name}</h2>
          <h3>Population: {planet.population}</h3>
          <h4>Climate: {planet.climate}</h4>
          {
            planet.films.length>0 && 
            <h3>Films</h3> 
          }
          { planet.films.length>0 &&
            <ul>
              {this.liFilm(planet.films)}
            </ul>
          }
        </Conteudo>
      )
    })

    return(
      <Container>
        {renderiza}
      </Container>
    )
  }
}