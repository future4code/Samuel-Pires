import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import {baseUrl} from '../parameters'

const Main = styled.main`
   width: 400px;
   height: 600px;
`
const PhotoAndDescription = styled.div`
   width: 400px;
   height: 500px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   >div{
      max-height: 100%;
      img{
         width: 400px;
         max-height: 100%;
      }
   }
`

const Description = styled.div`
   width: 100%;
   height: 0px;
   position: relative;
   bottom: 100px;
   color: white;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   >div{
      h2,p{
         display: inline;
      }
   }
   >p{
      width: 90%;
   }
`

const Buttons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button{
     width: 56px;
     height: 56px;
     border-radius:28px;
  }
`

const DefaultScreen = ()=>{
   const [profileChoose, setProfileChoose] = useState({})

   //API
   const getProfileChoose = async()=>{
      try{
         const res = await axios.get(`${baseUrl}/person`)
         setProfileChoose(res.data.profile)
      }
      catch(erro){
         console.log('erro em default screen getProfileChoose', erro)
      }
   }

   


   const useMountEffect = (call) => useEffect(call, []) //Uma espécie de "didMount"
   useMountEffect(getProfileChoose)

   return <Main>
      <PhotoAndDescription>
         <div>
            <img src={profileChoose.photo}/>
            <Description>
               <div>
                  <h2>{profileChoose.name},</h2>
                  <p> {profileChoose.age}</p>
               </div>
               <p>{profileChoose.bio}</p>
            </Description>
         </div>
      </PhotoAndDescription>
         
      <Buttons>
         <button>X</button>
         <button>M</button>
      </Buttons>
   </Main>
}

export default DefaultScreen