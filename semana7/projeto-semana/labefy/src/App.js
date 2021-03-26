import React from 'react'
import CreatePlaylist from './pages/CreatePlaylist'
import ViewPlaylists from './pages/ViewPlaylist'

export default class App extends React.Component{

   render(){
      return(
         <div>
            <ViewPlaylists />
         </div>
      )
   }
}