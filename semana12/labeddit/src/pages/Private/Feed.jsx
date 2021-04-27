import React, {useState, useEffect} from 'react'
import validateLogin from "../validateLogin";
import {useGetApi} from "../../hooks/useRequest";
import {useHistory} from 'react-router-dom'
import Header from "./components/Header/Header";
import PrivateContext from "../Context/PrivateContext";

export default function (){
  const token = validateLogin()
  const history = useHistory()
  const [posts, getApiPosts] = useGetApi([])
  const [loading, setLoading] = useState(true);
  const [postsFiltered, setPostsFiltered] = useState([]);

  useEffect(()=>{
    const config = {
      headers:{
        Authorization: token
      }
    }
    getApiPosts('/posts', config, (res,setValue)=>{
      setValue(res.data.posts)
      setPostsFiltered(res.data.posts)
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

  useEffect(()=>{
    console.log('postsFiltered', postsFiltered)
  },[postsFiltered])

  const states={posts, postsFiltered}
  const setters={setPostsFiltered, setLoading}
  return(
    <PrivateContext.Provider value={{states, setters}}>
      <Header value={'postsFiltered'} setValue={'setPostsFiltered'}/>
      {loading ? (
        <div>Carregando</div>
      ):(
        <div>Carregou</div>
      )}
    </PrivateContext.Provider>
  )
}