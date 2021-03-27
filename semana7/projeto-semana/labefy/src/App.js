import React from 'react'
import CreatePlaylist from './pages/CreatePlaylist'
import Header from './components/Header'
import ViewPlaylists from './pages/ViewPlaylist'

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
         default:
            return <div></div>
      }
   }

   render(){
      return(
         <div>
            <Header onClickChangeScreen={this.onClickChangeScreen} />
            {this.renderScreen()}
         </div>
      )
   }
}