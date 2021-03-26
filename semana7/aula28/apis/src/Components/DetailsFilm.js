import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

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

export default class DetailsFilm extends React.Component{
  state={
    film: {},
    charactersName : [],
    hideCharacter : 'Hide'
  }

  componentDidMount(){
    this.getFilm()
  }

  //API
  getFilm = async ()=>{
    try{
      const res = await axios.get(this.props.urlFilm)
      this.setState({film: res.data})
      this.getCharacters(res.data.characters)
    }
    catch(error){
      alert('Erro, por favor tente novamente mais tarde.')
    }
  }

  getCharacters = async(characters)=>{
    try{
      let res = await axios.get(characters[0])
      let newCharactersName = [res.data.name]
      for(let i=1; i<characters.length; i++){
        res = await axios.get(characters[i])
        newCharactersName.push(res.data.name)
      }
      this.setState({charactersName: newCharactersName})
    }
    catch(erro){
      console.log('erro', erro)
    }
  }

  //renderizar characters
  renderCharacters = ()=>{
    const li = this.state.charactersName.map((character)=>{
      return(
        <li>{character}</li>
      )
    })
    return li
  }

  onClickHideCharacter = ()=>{
    if(this.state.hideCharacter === 'Hide'){
      this.setState({
        hideCharacter: 'Unhide'
      })
    }
    else{
      this.setState({
        hideCharacter: 'Hide'
      })
    }
  }

  render(){

    const {title, director, producer, release_date, planets, starships, vehicles, species} = this.state.film

    return(
      <Container>
        <Conteudo>
          <h1>{title}</h1>
          <h2>Director: {director}</h2>
          <h4>Release date: {release_date}</h4>
          <p><b>Producer: {producer}</b></p>
          <div><b>Characters:</b> <button onClick={this.onClickHideCharacter}>{this.state.hideCharacter}</button></div>
          {this.state.hideCharacter==='Hide' &&
            <ul>
              {this.renderCharacters()}
            </ul>
          }
        </Conteudo>
      </Container>
    )
  }
}