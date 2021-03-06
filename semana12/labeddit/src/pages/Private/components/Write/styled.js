import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  height: 200px;
  border: 1px solid #d7d7d7;
  background-color: #F6F7F8;
  display: flex;
  flex-direction: column;

  :hover,:active{
    border: 1px solid #bfbfbf;
    box-shadow: 1px 1px 10px #d7d7d7;
  }
`

export const Title = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  font-weight: bold;
  border-bottom: 1px solid #d7d7d7;
  background-color: #FFF;
  padding-left: 10px;
  outline: none;
`

export const Text = styled.textarea`
  width: 100%;
  flex-grow: 1;
  border: 0;
  outline: none;
  resize: none;
  background-color: #fff;
  padding: 5px 10px;
`

export const DivButton = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: none;
  background-color: #fff;
`

export const Button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
`