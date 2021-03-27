import React from "react";
import styled from 'styled-components'
const Container = styled.div`
   display: flex;
   justify-content:space-around;
`

export default class Header extends React.Component{

   render(){
      return(
         <Container>
            <p onClick={()=>this.props.onClickChangeScreen('Create Playlist')}>CREATE PLAYLIST</p>
            <p onClick={()=>this.props.onClickChangeScreen('View Playlists')}>VIEW PLAYLIST</p>
            <p onClick={()=>this.props.onClickChangeScreen('Add Track')}>ADD TRACK</p>
         </Container>
      )
   }
}