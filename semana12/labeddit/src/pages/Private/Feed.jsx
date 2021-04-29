import React, {useState, useEffect} from 'react'
import validateLogin from "../validateLogin";
import {useGetApi} from "../../hooks/useRequest";
import {useHistory} from 'react-router-dom'
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import ContentPost from "./components/ContentPost/ContentPost";
import PrivateContext from "../Context/PrivateContext";
import {
  Container,
  All,
  ContainerAll
} from "./styled";
import Post from "./Post";
import config from "../config";

export default function Feed(){
  validateLogin()
  const history = useHistory()
  const [posts, getApiPosts] = useGetApi([])
  const [loading, setLoading] = useState(true);
  const [postsFiltered, setPostsFiltered] = useState([])
  const [showDetails, setShowDetails] = useState('')

  useEffect(()=>{
    getApiPosts('/posts', config(), (res,setValue)=>{
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
    if(postsFiltered.length){
      setLoading(false)
    }
  },[postsFiltered])

  const postsRendered = ()=>{
    return postsFiltered.map(post=>{
      return(
        <ContentPost post={post} setShowDetails={setShowDetails} key={post.id}/>
      )
    })
  }

  const states={posts, postsFiltered}
  const setters={setPostsFiltered, setLoading}
  return(
    <PrivateContext.Provider value={{states, setters}}>
      <All>
        <Header idValue={'posts'} idSetValue={'setPostsFiltered'}/>
        <ContainerAll showDetails={showDetails}>
          {loading ? (
            <Loading />
          ):(
            <Container>
              {postsRendered()}
            </Container>
          )}
          {showDetails &&
            <Post id={showDetails} setShowDetails={setShowDetails}/>
          }
        </ContainerAll>
      </All>
    </PrivateContext.Provider>
  )
}