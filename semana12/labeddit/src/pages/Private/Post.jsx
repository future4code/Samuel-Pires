import React,{useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {
  All,
  Container
} from './styled'
import {useGetApi} from "../../hooks/useRequest";
import config from "../config";
import Loading from "./components/Loading/Loading";
import ContentCard from "./components/ContentCard/ContentCard";

export default function Post(props){
  const [idPost, setId] = useState('')
  const {id} = useParams()
  const history = useHistory()
  const [post, getPostApi] = useGetApi()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(id){
      setId(id)
    }
    else if(props.id){
      setId(props.id)
    }
  },[id,props])

  useEffect(()=>{
    if(idPost){
      getPostApi(`/posts/${idPost}`, config(), (res, setValue)=>{
        if(res.data.post.text){
          setValue(res.data.post)
          setLoading(false)
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
    console.log('post', post)
  },[post])

  return(
    <All>
      <Container width={'30%'}>
        {loading? (
          <Loading />
        ):(post? (
          <ContentCard value={post} idPost={'a'}/> ): (<></>)
        )}
      </Container>
    </All>
  )
}