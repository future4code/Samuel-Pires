import { useState } from 'react'
import styled from 'styled-components'
import DefaultScreen from './pages/defaultScreen'
import MatchsScreen from './pages/matchsScreen'

const Div = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   >div{
      width: 400px;
      height: 600px;
      border: 1px solid black;
      border-radius: 20px;
   }
`

const Header = styled.header`
   height: 70px;
   width: 100%;
   border-bottom: 1px solid black;
   padding: 0 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   >div{
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      >svg{
         fill: #752c92;
      }
   }
   >h1{
      color: #3E9F92;
      p{
         display: inline;
         color: #752C92;
      }
   }
`

export default function App() {
   const [tela, setTela] = useState('default')

   const header = tela==='default'?(
      <Header>
         <div>
            <svg viewBox="0 0 24 24" role="presentation" >
               <path d="M16,9C18.33,9 23,10.17 23,12.5V15H17V12.5C17,11 16.19,9.89 15.04,9.05L16,9M8,9C10.33,9 15,10.17 15,12.5V15H1V12.5C1,10.17 5.67,9 8,9M8,7A3,3 0 0,1 5,4A3,3 0 0,1 8,1A3,3 0 0,1 11,4A3,3 0 0,1 8,7M16,7A3,3 0 0,1 13,4A3,3 0 0,1 16,1A3,3 0 0,1 19,4A3,3 0 0,1 16,7M9,16.75V19H15V16.75L18.25,20L15,23.25V21H9V23.25L5.75,20L9,16.75Z"></path>
            </svg>
         </div>
         <h1>astro<p>match</p></h1>
         <div>
            <svg viewBox="0 0 24 24" role="presentation">
               <path d="M22.59,7.92L23.75,9.33L19,14.08L16.25,11.08L17.41,9.92L19,11.5L22.59,7.92M6,5A3,3 0 0,1 9,8A3,3 0 0,1 6,11A3,3 0 0,1 3,8A3,3 0 0,1 6,5M11,5A3,3 0 0,1 14,8A3,3 0 0,1 11,11C10.68,11 10.37,10.95 10.08,10.85C10.65,10.04 11,9.06 11,8C11,6.94 10.65,5.95 10.08,5.14C10.37,5.05 10.68,5 11,5M6,13C8,13 12,14 12,16V18H0V16C0,14 4,13 6,13M12.62,13.16C14.63,13.5 17,14.46 17,16V18H14V16C14,14.82 13.45,13.88 12.62,13.16Z"></path>
            </svg>
         </div>
      </Header>
   ):(
      <Header>
         <div>Back</div>
         <h1>astro<p>match</p></h1>
         <div></div>
      </Header>
   )
      
   const main = <MatchsScreen />
   
   return <Div>
      <div>
         {header}
         {main}
     </div>
   </Div>
}


