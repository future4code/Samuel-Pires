import styled from 'styled-components'
import Logo from '../components/Logo'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Buttons = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  button{
    border: 1px solid black;
    border-radius: 20px;
  }
`

export default function(){
  return(
    <Container>
      <Logo>
        {/* aqui logo */}
      </Logo>
      <Buttons>
        <button>Viagens</button>
        <button>Admin</button>
      </Buttons>
    </Container>
  )
}