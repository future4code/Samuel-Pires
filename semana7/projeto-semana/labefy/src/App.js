import React from 'react'
import CreatePlaylist from './pages/CreatePlaylist'
import Header from './components/Header'
import ViewPlaylists from './pages/ViewPlaylist'
import AddTrack from './pages/AddTrack'

export default class App extends React.Component{
   state={
      screen : 'Add Track'
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
         <div>
            <Header onClickChangeScreen={this.onClickChangeScreen} />
            {this.renderScreen()}
         </div>
      )
   }
}