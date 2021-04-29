import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 60px;
  width: 100%;
  height: 200px;
  border: 1px solid #878a8c;
  background-color: #F6F7F8;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
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
  height: 140px;
  border: 0;
  outline: none;
  resize: none;
  border-bottom: 1px solid #878a8c;
  background-color: #F6F7F8;
  padding: 5px 10px;
`

export const Button = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  position: absolute;
  right: 10px;
`