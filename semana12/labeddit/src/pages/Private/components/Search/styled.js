import styled from 'styled-components'


export const Input = styled.input`
  outline: 0;
  width: 100%;
  height: 100%;
  background-color: #F6F7F8;
  border: 0;
  border-radius: 5px;
  padding-left: 40px;
  font-size: 14px;
  :hover,:focus{
    background-color: white;
    border: 1px solid #878a8c;
    box-shadow: 0px 0px 2px #878a8c;
    padding-left: 39px;
  }
`

export const DivInput = styled.div`
  width: ${props=>props.width? props.width : '50%'};
  height: 35px;
  display: flex;
  align-items: center;
`