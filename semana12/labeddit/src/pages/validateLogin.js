import {useHistory} from 'react-router-dom'

export default function (){
  const token = window.localStorage.getItem('token')
  if(token)return token
  else{
    const history = useHistory()
    history.push('/signin')
  }
}