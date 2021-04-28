import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px;
`

export const User = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`

export const Text = styled.div`
  width: 100%;
  height: auto;
  > a {
    color: #6c6a6a;
    cursor: pointer;
  }
`

export const Content = styled.div`
  
`

export const Footer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  >p{
    padding: 0 5px;
    font-size: 15px;
    color: #424242;
  }
`

export const Comments = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: #424242;
  cursor: pointer;
  border-radius: 2px;

  :hover {
    background-color: #e2e2e2;
  }

  :active {
    background-color: #d4d4d4;
  }

  > p {
    font-size: 15px;
  }
`