import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "../parameters";

const Container = styled.div`
   margin-left: 50px;
   grid-column:2/3;
   display: flex;
   flex-direction: column;
`

const Track = styled.div`
   display: grid;
   grid-template-columns: 1fr 400px;
   padding-left: 10px;
`

export default class ViewDetailsPlaylist extends React.Component{
   state={
      tracks : [],
      currentTrackUrl: '',
      currentPlaylistId: '',
   }

   componentDidMount(){
      this.getPlaylistTracks()
      this.setState({
         currentPlaylistId: this.props.playlistId
      })
   }

   componentDidUpdate(){
      if(this.props.playlistId !== this.state.currentPlaylistId){
         this.setState({currentPlaylistId: this.props.playlistId})
         this.getPlaylistTracks()
      }
      
   }

   //API
   getPlaylistTracks = async()=>{
      try{
         const res = await axios.get(`${baseUrl}${this.props.playlistId}/tracks`, axiosConfig)
         this.setState({tracks: res.data.result.tracks})
      }
      catch(erro){
         alert(erro.response.data.message)
      }
   }


   //Interação com usuário
   onClickTrack = (url)=>{
      this.setState({currentTrackUrl: url})
      this.refs.audio.pause();
      this.refs.audio.load();
      this.refs.audio.play();
   }

   renderScreen = ()=>{
      return this.state.tracks.map((track)=>{
         return(
            <Track key={track.id} onClick={()=>this.onClickTrack(track.url)}>
               <p>{track.name}</p>
               <p>{track.artist}</p>
            </Track>
         )
      })
   }

   render(){
      return(
         <Container>
            {this.renderScreen()}
            <audio controls ref='audio'>
               <source src={this.state.currentTrackUrl} type='audio/mp3'/>
               <source src={this.state.currentTrackUrl} type='audio/ogg'/>
               <source src={this.state.currentTrackUrl} type='audio/wav'/>
            </audio>
         </Container>
      )
   }
}