import React, {useState, useEffect} from 'react'
import validateLogin from "../validateLogin";
import {useGetApi} from "../../hooks/useRequest";
import {useHistory} from 'react-router-dom'
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import ContentPost from "./components/ContentPost/ContentPost";
import WritePost from "./components/Write/WritePost";
import PrivateContext from "../Context/PrivateContext";
import {
  Container,
  All,
  ContainerAll, CAll, Votes
} from "./styled";
import Post from "./Post";
import config from "../config";
import OrderVotes from "./components/Order/OrderVotes";
import OrderComments from "./components/Order/OrderComments";

export default function Feed(){
  validateLogin()
  const history = useHistory()
  const [posts, getApiPosts] = useGetApi([])
  const [loading, setLoading] = useState(true);
  const [postsFiltered, setPostsFiltered] = useState()
  const [showDetails, setShowDetails] = useState('')
  const [order, setOrder] = useState('');

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
    if(postsFiltered && postsFiltered.length){
      setLoading(false)
    }
  },[postsFiltered])

  const postsRendered = ()=>{
    if(postsFiltered.length===0){
      return <div>Não há publicações</div>
    }
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
      <CAll>
        <Header idValue={'posts'} idSetValue={'setPostsFiltered'}/>
        <All>

          <ContainerAll showDetails={showDetails}>
            {loading ? (
              <Loading />
            ):(
              <Container>
                <WritePost />
                <Votes>
                  <OrderVotes
                    value={'postsFiltered'}
                    setValue={'setPostsFiltered'}
                    order={order}
                    setOrder={setOrder}
                  />
                  <OrderComments
                    value={'postsFiltered'}
                    setValue={'setPostsFiltered'}
                    order={order}
                    setOrder={setOrder}
                  />
                </Votes>
                {postsRendered()}
              </Container>
            )}
            {showDetails &&
              <Post id={showDetails} setShowDetails={setShowDetails}/>
            }
          </ContainerAll>
        </All>
      </CAll>
    </PrivateContext.Provider>
  )
}