import React,{useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {
  All,
  Container
} from './styled'
import {useGetApi} from "../../hooks/useRequest";
import config from "../config";
import Loading from "./components/Loading/Loading";
import ContentPost from "./components/ContentPost/ContentPost";
import Header from "./components/Header/Header";
import PrivateContext from "../Context/PrivateContext";
import Search from "./components/Search/Search";
import validateLogin from "../validateLogin";
import WriteComment from "./components/Write/WriteComment";

export default function Post(props){
  validateLogin()
  const [idPost, setId] = useState('')
  const {id} = useParams()
  const history = useHistory()
  const [post, getPostApi] = useGetApi()
  const [loading, setLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [commentsFiltered, setCommentsFiltered] = useState([]);
  const [comments, setComments] = useState([])

  const tela = ()=>{
    if(id){
      setId(id)
      console.log('id por param', id)
    }
    else if(props.id){
      setId(props.id)
    }
  }

  const commentsRendered=()=>{
    return commentsFiltered.map((comment)=>{
      return(
        <div>{comment.text}</div>
      )
    })
  }

  useEffect(()=>{
    if(!id){
      const muda = ()=>{
        setWindowWidth(window.innerWidth)
      }
      window.addEventListener('resize', function(){
        muda()
      })
    }
    if(windowWidth<1000 && !id){
      history.push(`/post/${props.id}`)
    }
  },[windowWidth,id])

  useEffect(()=>{
    tela()
  },[id,props])

  useEffect(()=>{
    if(idPost){
      getPostApi(`/posts/${idPost}`, config(), (res, setValue)=>{
        if(res.data.post.text){
          setValue(res.data.post)
          setLoading(false)
          setCommentsFiltered(res.data.post.comments)
          setComments(res.data.post.comments)
        }
        else{
          //fiz q requisição e peguei o post, agora tenho que continuar
        }

      },(err)=>{
        alert('erro aqui', err)
      })
    }
  },[idPost])

  useEffect(()=>{
    if(commentsFiltered.length) {
      setLoading(false)
    }
  },[commentsFiltered])

  const states = {comments}
  const setters = {setCommentsFiltered, setLoading}

  return(
    <PrivateContext.Provider value={{states,setters}}>
      <All>
        {id?(
          <Header idValue={'comments'} idSetValue={'setCommentsFiltered'} />
        ):(
          <Search idValue={'comments'} idSetValue={'setCommentsFiltered'} />
        )}
        <Container width={'30%'}>
          {loading? (
            <Loading />
          ):(post? (<>
            <ContentPost post={post}/>
              <WriteComment idPost={post.id}/>
            </>): (<></>)
          )}
          {commentsFiltered.length &&
           commentsRendered()}
        </Container>
      </All>
    </PrivateContext.Provider>
  )
}