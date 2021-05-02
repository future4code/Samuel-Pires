import styled from 'styled-components'


export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #F6F7F8;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 14px;
  :hover,:active,:focus{
    background-color: white;
    border: 1px solid #878a8c;
    outline: 0;
    padding-left: 9px;
  }
`

export const DivInput = styled.div`
  width: 60%;
  height: 35px;
  display: flex;
  align-items: center;
  position: relative;
`