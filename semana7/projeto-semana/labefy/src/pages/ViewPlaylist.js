import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import ViewDetailsPlaylist from '../components/ViewDetailsPlaylist'
import { baseUrl, axiosConfig} from '../parameters'

const Container = styled.div`
   display: grid;
   grid-template-columns: 300px 1fr;
   grid-template-rows: 1fr 100px;
   height: 100%;
   border-top: 1px solid black;
`

const ContainerPlaylist = styled.div`
   grid-column:1/2;
   grid-row: -1/1;
   border-right: 1px solid black;
   padding: 5px 10px;
`

const Playlists = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 2px;
   align-items: center;
   cursor: pointer;
   
   &>button{
      cursor: pointer;
      border: 0;
      padding: 5px 10px;
      :hover{
         background-color: rgba(100,100,100,0.4);
         border-radius: 5px;
      }
   }
   &>p{
      flex-grow: 1;
      :hover{
         text-decoration: underline;
      }
   }
`

export default class ViewPlaylists extends React.Component{
   state={
      playlists: [],
      currentPlaylistId: '',
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
      this.setState({
         playlists: newPLaylists,
         currentPlaylistId: '',
      })
   }

   //Interação com usuário
   onClickPlaylist = (playlistId)=>{
      this.setState({currentPlaylistId: playlistId})
   }

   renderizarScreen = ()=>{
      return this.state.playlists.map((playlist)=>{
         return(
            <Playlists key={playlist.id}>
               <p onClick={()=>this.onClickPlaylist(playlist.id)}>{playlist.name}</p>
               <button onClick={()=>this.deletePlaylist(playlist.id)}>X</button>
            </Playlists>
         )
      })
   }


   renderViewDetailsPlaylist = ()=>{
      if(this.state.currentPlaylistId){
         return <ViewDetailsPlaylist playlistId={this.state.currentPlaylistId}/>
      }else{
         return <div></div>
      }
   }

   render(){

      return(
         <Container>
            <ContainerPlaylist>
                  {this.renderizarScreen()}
            </ContainerPlaylist>

            {this.renderViewDetailsPlaylist()}

         </Container>
      )
   }
}