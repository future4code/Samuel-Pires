import React,{useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {
  All, CAll,
  Container, ContainerAll, DivSearch, Modal
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
import ContentComment from "./components/ContentPost/ContentComment";
import OrderComments from "./components/Order/OrderComments";
import OrderVotes from "./components/Order/OrderVotes";
import WritePost from "./components/Write/WritePost";
import {MyCloseIcon} from "./components/styledMaterial";

export default function Post({id, setShowDetails}){
  validateLogin()
  const history = useHistory()
  const [post, getPostApi] = useGetApi()
  const [loading, setLoading] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [commentsFiltered, setCommentsFiltered] = useState([]);
  const [comments, setComments] = useState([])

  const commentsRendered=()=>{
    return commentsFiltered.map((comment)=>{
      return(
        <ContentComment comment={comment} idPost={post.id}/>
      )
    })
  }

  useEffect(()=>{
    if(id){
      getPostApi(`/posts/${id}`, config(), (res, setValue)=>{
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
  },[id])

  useEffect(()=>{
    if(commentsFiltered.length) {
      setLoading(false)
    }
  },[commentsFiltered])

  const states = {comments, commentsFiltered}
  const setters = {setCommentsFiltered, setLoading}

  console.log('comment', commentsFiltered[0])

  return(
    <PrivateContext.Provider value={{states,setters}}>
      <Modal onClick={()=>console.log('cliquei no modal')}>
        <DivSearch>
          <MyCloseIcon onClick={()=>setShowDetails(false)}/>
          <Search idValue={'comments'} idSetValue={'setCommentsFiltered'} />
        </DivSearch>
          <All>
          <ContainerAll>
            {loading?(
              <Loading />
            ):(
              <Container>
                <ContentPost post={post} key={post.id} />
                <WriteComment idPost={post.id} />
                {commentsRendered()}
              </Container>
            )}
          </ContainerAll>
        </All>
      </Modal>
    </PrivateContext.Provider>
  )
}