import axios from 'axios'
import React from 'react'
import { baseUrl, axiosConfig} from '../parameters'

export default class CreatePlaylist extends React.Component{
   state={
      inputNome: '',
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

   //API
   createPlaylist = async(namePlaylist)=>{
      const body = {
         name : namePlaylist
      }
      try{
         const res = await axios.post(baseUrl, body, axiosConfig)
      }
      catch(erro){
         alert(erro.response.data.message)
      }
   }

   render(){
      return(
         <div>
            <h3>Create playlist</h3>
            <input 
               placeholder='Nome da playlist...' value={this.state.inputNome} 
               onChange={this.onChangeInputNome} onKeyDown={this.onKeyDownEnter}
            />
            <button onClick={this.onClickSend}>Send</button>
         </div>
      )
   }
}