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

export default function ({value, setShowDetails}){
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

    putApi(`/posts/${value.id}/vote`,{direction}, config(), (res)=>{
      setVote(direction)
    })

  }

  return(
    <Container>
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
        {setShowDetails?(
          <Comments onClick={()=>setShowDetails(value.id)} click>
            <MyCommentIcon />
            <p>{value.commentsCount} Comentários</p>
          </Comments>

        ):(
          <Comments >
            <MyCommentIcon />
            <p>{value.commentsCount} Comentários</p>
          </Comments>
        )}

      </Footer>
    </Container>
  )
}