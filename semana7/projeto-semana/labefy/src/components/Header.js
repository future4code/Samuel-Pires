import React from "react";
import styled from 'styled-components'
const Container = styled.div`
   width:100%;
   display: flex;
   justify-content: flex-end;
   background-color: #000833;
   font-weight: bold;
   
`

const Conteudo = styled.div`
   display: flex;
   width: 45%;
   right: 0;
   &>p{
      color: white;
      border: 1px solid white;
      padding: 10px;
      margin-left: 20px;
      cursor: pointer;
   }
   &>p:hover{
      background-color: #616161;
   }
`

export default class Header extends React.Component{

   render(){
      return(
         <Container>
            <Conteudo>
               <p onClick={()=>this.props.onClickChangeScreen('Create Playlist')}>CREATE PLAYLIST</p>
               <p onClick={()=>this.props.onClickChangeScreen('View Playlists')}>VIEW PLAYLIST</p>
               <p onClick={()=>this.props.onClickChangeScreen('Add Track')}>ADD TRACK</p>
            </Conteudo>
         </Container>
      )
   }
}