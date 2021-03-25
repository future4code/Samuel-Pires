import axios from "axios";
import React from "react";
import styled from 'styled-components'
import { urlFilms, urlVehicles } from "../urls";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Conteudo = styled.div`
  padding: 10px;
  width:320px;
  height: 500px;
  overflow: auto;
  display: flex;
  flex-direction: column;

  &>p{
    text-align: justify;
  }  
  &>h2,>h3{
    text-align: center;
  }
`

export default class Vehicles extends React.Component{

  state={
    vehicles : [],
    titleAndUrl: [],
  }

  componentDidMount(){
    this.getVehicles()
    this.getFilmes()
  }

  //API
  getVehicles = async ()=>{
    try{
      let res = await axios.get(urlVehicles)
      let newVehicles = res.data.results
      while(res.data.next !==null){
        res = await axios.get(res.data.next)
        newVehicles = [...newVehicles, ...res.data.results]
      }
      this.setState({vehicles: newVehicles})
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

    // console.log('listaFilms', listaFilms)

    const li = listaFilms.map((film)=>{
      return <li>
        {film.title}
      </li>
    })

    return li;
  }

  render(){

    const renderiza = this.state.vehicles.map((vehicle)=>{
      return(
        <Conteudo>
          <h2>{vehicle.name}</h2>
          <h3>{vehicle.model}</h3>
          <h4>{vehicle.manufacturer}</h4>
          <hr />
          <ul>
            <li>Cost in credits: ${vehicle.cost_in_credits}</li>
            <li>Passengers: {vehicle.passengers}</li>
            <li>Length: {vehicle.length}</li>
          </ul>
          <hr />
          <h4>Filmes</h4>
          <ul>
            {this.liFilm(vehicle.films)}
          </ul>
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