import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { baseUrl, axiosConfig} from '../parameters'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   &>input{
      width: 235px;
      border:0;
      border-bottom: 1px solid black;
      border-radius: 5px;
      padding: 10px;
   }
   &>button{
      width: 255px;
      border: 0;
      padding: 10px;
      margin-top: 10px;
      background-image: linear-gradient(180deg, #001270, black);
      color: white;
      font-size: 14px;
      font-weight: bold;
   }
   &>button:hover{
      opacity: 70%;
   }
   &>button:active{
      opacity: 100%;
   }
`

export default class CreatePlaylist extends React.Component{
   state={
      inputNome: '',
   }

   //API
   createPlaylist = async(namePlaylist)=>{
      const body = {
         name : namePlaylist
      }
      try{
         await axios.post(baseUrl, body, axiosConfig)
      }
      catch(erro){
         alert(erro.response.data.message)
      }
   }

   //Interação com usuário
   onChangeInputNome = (e)=>{
      this.setState({
         inputNome: e.target.value
      })
   }

   onKeyDownEnter = (e)=>{
      if(e.key === 'Enter')this.onClickSend()
   }

   onClickSend = ()=>{
      this.createPlaylist(this.state.inputNome)
      this.setState({inputNome: ''})
   }

   render(){
      return(
         <Container>
            <h1>Create playlist</h1>
            <input 
               placeholder='Nome da playlist...' value={this.state.inputNome} 
               onChange={this.onChangeInputNome} onKeyDown={this.onKeyDownEnter}
            />
            <button onClick={this.onClickSend}>Send</button>
         </Container>
      )
   }
}