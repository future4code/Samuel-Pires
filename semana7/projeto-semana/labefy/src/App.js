import React from 'react'
import CreatePlaylist from './pages/CreatePlaylist'
import Header from './components/Header'
import ViewPlaylists from './pages/ViewPlaylist'
import AddTrack from './pages/AddTrack'
import styled from 'styled-components'
import './assets/fonts.css'

const Container = styled.div`
   font-family: 'Roboto Slab';
   font-size: 16px;
   height: 100vh;
   display: flex;
   flex-direction:column;
   ::placeholder{
      color: red;
   }
`

export default class App extends React.Component{
   state={
      screen : 'Create Playlist'
   }

   onClickChangeScreen = (screenChange)=>{
      this.setState({screen: screenChange})
   }

   renderScreen = ()=>{
      switch(this.state.screen){
         case 'Create Playlist':
            return <CreatePlaylist />
         case 'View Playlists':
            return <ViewPlaylists />
         case 'Add Track':
            return <AddTrack />
         default:
            return <div></div>
      }
   }

   render(){
      return(
         <Container>
            <Header onClickChangeScreen={this.onClickChangeScreen} />
            {this.renderScreen()}
         </Container>
      )
   }
}