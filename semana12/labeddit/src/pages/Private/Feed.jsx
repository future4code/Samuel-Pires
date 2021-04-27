import React, {useState, useEffect} from 'react'
import validateLogin from "../validateLogin";
import {useGetApi} from "../../hooks/useRequest";
import {useHistory} from 'react-router-dom'
import Header from "./components/Header/Header";

export default function (){
  const token = validateLogin()
  const history = useHistory()
  const [posts, getApiPosts] = useGetApi([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const config = {
      headers:{
        Authorization: token
      }
    }
    getApiPosts('/posts', config, (res,setValue)=>{
      setValue(res.data.posts)
      setLoading(false)
    },(err)=>{
      if(err.response.data.message==='Não autorizado'){
        window.alert('Estamos com problema na sua autenticação, por favor' +
          ' faça login novamente')
        window.localStorage.removeItem('token')
        history.push('/signin')
      }
    })
  },[])
  return(
    <div>
      <Header />
      {loading ? (
        <div>Carregando</div>
      ):(
        <div>Carregou</div>
      )}
    </div>
  )
}