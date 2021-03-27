import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "../parameters";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 10px;
`

const Radio = styled.div`
   display: flex;
   margin-bottom: 10px;
`

const ContainerUrl = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 500px;

   &>button{
      width: 490px;
      border: 1px solid black;
      padding:8px;
      margin-top: 5px;
      background-image: linear-gradient(180deg, #001270, black);
      color: white;
      font-weight: bold;
   }
   &>button:hover{
      opacity: 70%;
   }
   &>button:active{
      opacity: 100%;
   }
`

const Input1 = styled.div`
   display: flex;
   width:100%;
   justify-content: center;
   margin-bottom: 5px;
   &>input{
      width: 225px;
      border: 1px solid black;
      padding: 8px;
      :hover{
         box-shadow: 0px 0px 10px #000833;
      }
   }
   &>input:nth-child(1){
      margin-right: 2px;
   }
`

const Input2 = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;

   &>input{
      width: 350px;
      margin-right: 2px;
      border: 1px solid black;
      padding: 8px;
      :hover{
         box-shadow: 0px 0px 10px #000833;
      }
   }
   &>select{
      width: 120px;
      border: 1px solid black;
      padding: 8px;
      :hover{
         box-shadow: 0px 0px 10px #000833;
      }
   }
`

export default class AddTrack extends React.Component{
   state={
      radio : 'url',
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
      if(this.state.inputNameTrack && this.state.inputArtist && this.state.inputUrl){
         const body={
            name: this.state.inputNameTrack,
            artist: this.state.inputArtist,
            url: this.state.inputUrl
         }
         try{
            await axios.post(`${baseUrl}${this.state.selectedPlaylistId}/tracks`, body ,axiosConfig)
            this.setState({
               inputNameTrack: '',
               inputArtist: '',
               inputUrl: '',
            })
         }
         catch(erro){
            console.log('erro', erro)
         }
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
               <ContainerUrl>
                  <Input1>
                     <input placeholder='Name track' onChange={this.onChangeInputNameTrack} value={this.state.inputNameTrack}/>
                     <input placeholder='Artist' onChange={this.onChangeInputArtist} value={this.state.inputArtist}/>
                  </Input1>
                  <Input2>
                     <input placeholder='Url' type='url' onChange={this.onChangeInputUrl} value={this.state.inputUrl}/>
                     {this.renderPlaylists()}
                  </Input2>
                  <button onClick={this.addTrackToPlaylist}>Add Track</button>
               </ContainerUrl>
            )
      }
   }

   render(){
      return(
         <Container>
            {/* <Radio>
               <input type='radio' name='font' for='spotify' onChange={()=>this.onChangeRadio('spotify')}/>
               <label for='spotify'>Spotify</label>
               <input type='radio' name='font' for='url' defaultChecked='true'onChange={()=>this.onChangeRadio('url')}/>
               <label for='url'>Url</label>
            </Radio> */}
            {this.renderScreen()}
         </Container>
      )
   }
}