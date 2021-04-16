import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MiniLogoStyled } from './styledComponents'
import labexMini from '../assets/labex-mini.png'
const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

const Nav = styled.nav`
  
  ul{
    list-style: none;
    display: flex;
    li{
      padding: 10px;
    }
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
`

export default function Header(){
  const[token, setToken] = useState(window.localStorage.getItem('token'))

  const logout = ()=>{
    window.localStorage.removeItem('token')
    setToken(null)
  }
  return(
    <Container>
      <MiniLogoStyled>
      <Link to='/'><img src={labexMini} /></Link>
      </MiniLogoStyled>
      <Nav>
        <ul>
          <li>
            <Link to='/'><p>Home</p></Link>
          </li>
          <li>
            <Link to='/trips/list'><p>Viagens</p></Link>
          </li>
          <li>
            <Link to='/trips/application'>Inscrever-se</Link>
          </li>
          <li>
            <Link to='/admin/trips/list'><p>Admin</p></Link>
          </li>
          {
            token ?( 
            <li>
              <a onClick={logout}>Logout</a>
            </li>):(
              <li>
              <Link to='/login'>Login</Link>
            </li>
            )
          }
        </ul>
      </Nav>
    </Container>
  )
}