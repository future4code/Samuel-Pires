import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  height: 200px;
  border: 1px solid #878a8c;
  background-color: #F6F7F8;
  border-radius: 10px;
  overflow: hidden;
  //position: relative;
  display: flex;
  flex-direction: column;
`

export const Title = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  font-weight: bold;
  border-bottom: 1px solid #878a8c;
  background-color: #F6F7F8;
  padding-left: 10px;
  outline: none;
`

export const Text = styled.textarea`
  width: 100%;
  flex-grow: 1;
  border: 0;
  outline: none;
  resize: none;
  border-bottom: 1px solid #878a8c;
  background-color: #F6F7F8;
  padding: 5px 10px;
`

export const DivButton = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: none;
`

export const Button = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`