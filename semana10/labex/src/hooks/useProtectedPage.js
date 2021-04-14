import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function useProtectedPage(){
  const history = useHistory()

  useEffect(()=>{
    const token = window.localStorage.getItem('token')

    if(!token)history.push('/login')
  },[])
}