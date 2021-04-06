import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const Container = styled.div`
   margin-top: 20px;
   width: 200px;
   border: 1px solid black;
   display: flex;
   flex-direction: column;
   align-items: center;
   p{
      margin-top: 10px;
   }
`

export default function PokeCard(props){
   const [pokemon, setPokemon] = useState({})

   //API
   const getPokemon = pokeName => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
          // guarda as infos do pokemon no estado
          setPokemon(response.data)
        })
        .catch(err => {
          console.log(err);
        });
    };


   useEffect(()=>{ //mount
      getPokemon(props.pokemon)
      console.log('useEffect mount')
   },[])

   useEffect(()=>{ //update caso props tenha mudado
      getPokemon(props.pokemon)
      console.log('useEffect update')

   },[props.pokemon])

   return (
      <Container>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </Container>
    );
}