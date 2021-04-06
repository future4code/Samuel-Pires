import { useState } from 'react'
import styled from 'styled-components'
import DefaultScreen from './pages/defaultScreen'
import MatchsScreen from './pages/matchsScreen'

const Div = styled.div`
   width: 100vw;
`

const Header = styled.header`
   margin:0;
   padding: 0 30px;
   height: 70px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   div{
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`

export default function App() {
   const [tela, setTela] = useState('default')

   const header = tela==='default'?(
      <Header>
         <div></div>
         <h1>astromatch</h1>
         <div>Matchs</div>
      </Header>
   ):(
      <Header>
         <div>Back</div>
         <h1>astromatch</h1>
         <div></div>
      </Header>
   )
      
   const main = <MatchsScreen />
   
   return <Div>
     {header}
     {main}
   </Div>
}


