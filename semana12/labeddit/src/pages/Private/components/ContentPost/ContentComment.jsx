import React, {useState} from 'react'
import {
  User,
  Text,
  Footer, Container
} from './styled'
import {MyArrowDownIcon, MyArrowUpIcon} from "./styledMaterial";
import {putApi} from "../../../../hooks/useRequest";
import config from "../../../config";

export default function ContentComment({comment,idPost}){
  console.log('comment',comment)

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
      if (comment.text.length < 400) {
        return comment.text
      } else {
        return <>{comment.text.slice(0,400)}... <a onClick={changeHiddenShow}>{hiddenShow}</a></>
      }
    }else{
      return <>{comment.text} <a onClick={changeHiddenShow}>{hiddenShow}</a></>
    }
  }

  const votePut = (direction)=>{
    if(direction===vote){
      comment.votesCount+= direction*(-1)
      direction=0
    }
    else if(direction*(-1)===vote){
      comment.votesCount+=direction*2
    }
    else{
      comment.votesCount+=direction
    }

    putApi(`/posts/${idPost}/comment/${comment.id}/vote`,{direction}, config(), (res)=>{
      setVote(direction)
    })
  }

  return(
    <Container>
      <User><strong>{comment.username}</strong></User>
      <Text>
        {text()}
      </Text>
      <Footer>
        <MyArrowUpIcon vote={vote} onClick={()=>votePut(1)}/>
        <p>{comment.votesCount}</p>
        <MyArrowDownIcon vote={vote} onClick={()=>votePut(-1)}/>
      </Footer>
    </Container>
  )
}

