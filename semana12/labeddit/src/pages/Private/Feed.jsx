import React, {useState, useEffect} from 'react'
import validateLogin from "../validateLogin";
import {useGetApi} from "../../hooks/useRequest";
import {useHistory} from 'react-router-dom'
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import ContentCard from "./components/ContentCard/ContentCard";
import PrivateContext from "../Context/PrivateContext";
import {
  Container,
  All
} from "./styled";

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
      <All>
        <Header value={'posts'} setValue={'setPostsFiltered'}/>
        <Container>
          {loading ? (
            <Loading />
          ):(
            <ContentCard value={posts[0]} id={'posts'}/>
          )}
        </Container>
      </All>
    </PrivateContext.Provider>
  )
}