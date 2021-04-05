import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "../parameters";

const Container = styled.div`
   grid-column:2/3;
   display: flex;
   flex-direction: column;

   &>audio{
      position: fixed;
      bottom:0;
      left:0;
      width: 100%;
   }
`

const Track = styled.div`
   display: grid;
   grid-template-columns: 1fr 50px;
   padding-left: 10px;
   border-bottom: 1px solid black;
   cursor: pointer;
   :hover{
      background-color: #dedede;
   }
   &>button{
      margin-right: 10px;
      border:0;
      background-color: rgba(0,0,0,0);
      width: 30px;
      height: 30px;
      align-self: center;
      cursor: pointer;
      :hover{
         background-color: rgba(100,100,100,0.4);
         border-radius: 5px;
      }
   }
`

const TrackPlay = styled.div`
   grid-column: 1/2;
   display: grid;
   grid-template-columns: 1fr 400px;
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

   removeTrackFromPlaylist = async (idTrack)=>{
      try{
         await axios.delete(`${baseUrl}${this.state.currentPlaylistId}/tracks/${idTrack}`, axiosConfig)
         this.removeTrackFromPlaylistState(idTrack)
      }
      catch(erro){
         console.log(erro.response.data.message)
      }
   }

   //Funções internas
   removeTrackFromPlaylistState = (idTrack)=>{
      const newTracks = this.state.tracks.filter((track)=>{
         if(idTrack === track.id){
            if(track.url === this.state.currentTrackUrl){
               this.onClickTrack('')
            }
            return false
         }
         else return true
      })
      this.setState({
         tracks : newTracks
      })
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
            <Track key={track.id}>
               <TrackPlay onClick={()=>this.onClickTrack(track.url)}>
                  <p>{track.name}</p>
                  <p>{track.artist}</p>
                  </TrackPlay>
               <button onClick={()=>this.removeTrackFromPlaylist(track.id)}>x</button>
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