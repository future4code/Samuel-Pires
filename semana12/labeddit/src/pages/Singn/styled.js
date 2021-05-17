import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  margin: 15px 0;
  font-size: 25px;
`

export const Form = styled.form`
  width: min(500px, 90%);
  min-width: 360px;
`

export const DivLock = styled.div`
  padding: 10px;
  background-color: #ff4500;
  border-radius: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MyButton = styled.button`
  width: 100%;
  margin-top: 10px;
  border: none;
  border-radius: 7px;
  padding: 10px;
  color: white;
  background-color: #FF6106;
  transition: all 0.5s;
  :hover{
    background-color:#ff4500;
  }
  :active{
    background: linear-gradient(45deg,#FF6106,#FF2C02);
  }
`

export const MyButtonOutline = styled.button`
  color: #ff4500;
  border: 1px solid #ff4500;
  border-radius: 7px;
  height: 40px;
  width: min(500px, 90%);
  margin-top: 10px;

  transition: all 1s;
  :active {
    background: linear-gradient(45deg, #e3d4cb, #f3b2a4);
  }
`