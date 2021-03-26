import axios from 'axios'
import React from 'react'
import { baseUrl, axiosConfig} from '../parameters'

export default class ViewPlaylists extends React.Component{
   state={
      playlists: []
   }

   componentDidMount(){
      this.getPLaylists()
   }

   //API
   getPLaylists = async ()=>{
      try{
         const res = await axios.get(baseUrl, axiosConfig)
         this.setState({playlists: res.data.result.list})
      }
      catch(erro){
         alert(erro.response.data.message)
      }
   }

   deletePlaylist = async (playlistId)=>{
      try{
         await axios.delete(baseUrl+playlistId, axiosConfig)
         this.deletePlaylistState(playlistId)
      }
      catch(erro){
         alert(erro.result)
      }
   }

   //Funções internas
   deletePlaylistState = (playlistId)=>{
      const newPLaylists = this.state.playlists.filter((playlist)=>{
         if(playlistId === playlist.id)return false
         else return true
      })
      this.setState({playlists: newPLaylists})
   }


   renderizarScreen = ()=>{
      return this.state.playlists.map((playlist)=>{
         return(
            <div key={playlist.id}>
               {playlist.name}
               <button onClick={()=>this.deletePlaylist(playlist.id)}>Delete</button>
            </div>
         )
      })
   }

   render(){
      return(
         <div>
            {this.renderizarScreen()}
         </div>
      )
   }
}