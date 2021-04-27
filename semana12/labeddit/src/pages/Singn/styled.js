import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';

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
  width: 500px;
`

export const Input = styled(TextField)`
  width: 100%;
  height: 70px;
`

export const Lock = styled(LockOutlinedIcon)``

export const InputButton = styled(Button)`
  width: 100%;
  p{
    font-weight: bold;
    font-size: 16px;
  }
`