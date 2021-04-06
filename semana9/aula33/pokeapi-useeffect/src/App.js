import axios from 'axios'
import {useEffect, useState} from 'react'
import PokeCard from './components/PokerCard/index'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  //API
  const getPokeList = ()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }

  //Interação com usuário
  const changePokeName = event => {
    setPokeName(event.target.value)
  };


  useEffect(()=>{ //mount
    getPokeList()
    console.log('useEffect mount principal')
  },[])

  return (
    <Container>
      {/* evento onChange chama função toda vez que o usuário 
      escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
      caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </Container>
  );
}

export default App;
