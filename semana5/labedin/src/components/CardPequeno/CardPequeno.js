import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
  return <div className="cardpequeno-container">
      <img src={props.imagem} />
      <p>{props.descricao}</p>
  </div>
}

export default CardPequeno