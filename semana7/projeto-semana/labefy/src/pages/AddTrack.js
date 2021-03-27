import axios from "axios";
import React from "react";
import { axiosConfig, baseUrl } from "../parameters";


export default class AddTrack extends React.Component{
   state={
      radio : 'spotify',
      playlists: [],
      selectedPlaylistId: '',
      inputNameTrack: '',
      inputArtist: '',
      inputUrl: '',
   }

   componentDidMount(){
      this.getPLaylists()
   }

   //API
   getPLaylists = async ()=>{
      try{
         const res = await axios.get(baseUrl, axiosConfig)
         if(res.data.result.list.length>0){
            this.setState({
               playlists: res.data.result.list,
               selectedPlaylistId: res.data.result.list[0].id
            })
         }
      }
      catch(erro){
         alert(erro.response.data.message)
      }
   }

   addTrackToPlaylist = async()=>{
      const body={
         name: this.state.inputNameTrack,
         artist: this.state.inputArtist,
         url: this.state.inputUrl
      }
      try{
         await axios.post(`${baseUrl}${this.state.selectedPlaylistId}/tracks`, body ,axiosConfig)
      }
      catch(erro){
         console.log('erro', erro)
      }
   }

   //Interação com usuário
   onChangeRadio = (nfor)=>{
      this.setState({radio: nfor})
   }

   onChangeSelectedPlaylist = (e)=>{
      this.setState({selectedPlaylistId: e.target.value})
   }

   onChangeInputNameTrack = (e)=>{
      this.setState({
         inputNameTrack: e.target.value
      })
   }

   onChangeInputArtist = (e)=>{
      this.setState({
         inputArtist: e.target.value
      })
   }

   onChangeInputUrl = (e)=>{
      this.setState({
         inputUrl: e.target.value
      })
   }


   renderPlaylists = ()=>{
      return <select name='selectPlaylist' onChange={this.onChangeSelectedPlaylist}>
         {
            this.state.playlists.map((playlist)=>{
               return(
                  <option value={playlist.id}>{playlist.name}</option>
               )
            })
         }
      </select>
   }

   renderScreen =()=>{
      switch(this.state.radio){
         case 'spotify':
            return(
               <div>
                  <input placeholder='Name track' />
                  <input placeholder='Artist' />
                  <button>Search</button>
               </div>
            )
         case 'url':
            return(
               <div>
                  <input placeholder='Name track' onChange={this.onChangeInputNameTrack}/>
                  <input placeholder='Artist' onChange={this.onChangeInputArtist}/>
                  <input placeholder='Url' type='url' onChange={this.onChangeInputUrl}/>
                  {this.renderPlaylists()}
                  <button onClick={this.addTrackToPlaylist}>Add Track</button>
               </div>
            )
      }
   }

   render(){
      return(
         <div>
            <input type='radio' name='font' for='spotify' defaultChecked='true' onChange={()=>this.onChangeRadio('spotify')}/>
            <label for='spotify'>Spotify</label>
            <input type='radio' name='font' for='url'onChange={()=>this.onChangeRadio('url')}/>
            <label for='url'>Url</label>
            {this.renderScreen()}
         </div>
      )
   }
}