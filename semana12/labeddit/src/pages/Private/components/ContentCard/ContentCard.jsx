import React, {useState, useEffect, useRef} from 'react'
import {putApi} from "../../../../hooks/useRequest";
import config from "../../../config";
import {
  Container,
  Footer,
  Text,
  User,
  Content,
  Comments
} from './styled'
import {
  MyArrowDownIcon,
  MyArrowUpIcon,
  MyCommentIcon
} from './styledMaterial'

export default function ({value, idPost, setShowDetails}){
  const [hiddenShow, setHiddenShow] = useState('Ver mais...');
  const [vote, setVote] = useState(0)

  const changeHiddenShow=()=>{
    if(hiddenShow==='Ver mais...'){
      setHiddenShow('Esconder...')
    }
    else{
      setHiddenShow('Ver mais...')
    }
  }

  const text = ()=>{
    if(hiddenShow==='Ver mais...'){
      if (value.text.length < 400) {
        return value.text
      } else {
        return <>{value.text.slice(0,400)}... <a onClick={changeHiddenShow}>{hiddenShow}</a></>
      }
    }else{
      return <>{value.text} <a onClick={changeHiddenShow}>{hiddenShow}</a></>
    }
  }

  const votePut = (direction)=>{
    if(direction===vote) direction=0

    if(!idPost){
      putApi(`/posts/${value.id}/vote`,{direction}, config(), (res)=>{
        setVote(direction)
      })
    }
    else{
      putApi(`/posts/${idPost}/comment/${value.id}/vote`, {direction}, config(),(res)=>{
        setVote(direction)
      })
    }
  }

  return(
    <Container key={value.id} >
      <User>
        <strong>{value.username}</strong>
      </User>
      <Text>
        {text()}
      </Text>
      <Footer>
        <MyArrowUpIcon vote={vote} onClick={()=>votePut(1)}/>
        <p>{value.votesCount}</p>
        <MyArrowDownIcon vote={vote} onClick={()=>votePut(-1)}/>
        {idPost?(
          <Comments >
            <MyCommentIcon />
            <p>{value.commentsCount} Comentários</p>
          </Comments>
        ):(
          <Comments onClick={()=>setShowDetails(value.id)}>
            <MyCommentIcon />
            <p>{value.commentsCount} Comentários</p>
          </Comments>
        )}

      </Footer>
    </Container>
  )
}