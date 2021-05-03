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

export default function ({post, setShowDetails}){
  const [hiddenShow, setHiddenShow] = useState('Ver mais...');
  const [vote, setVote] = useState(post.userVoteDirection)

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
      if (post.text.length < 250) {
        return post.text
      } else {
        return <>{post.text.slice(0,200)}... <a onClick={changeHiddenShow}>{hiddenShow}</a></>
      }
    }else{
      return <>{post.text} <a onClick={changeHiddenShow}>{hiddenShow}</a></>
    }
  }

  const votePut = (direction)=>{
    if(direction===vote){
      post.votesCount+= direction*(-1)
      direction=0
    }
    else if(direction*(-1)===vote){
      post.votesCount+=direction*2
    }
    else{
      post.votesCount+=direction
    }
    putApi(`/posts/${post.id}/vote`,{direction}, config(), (res)=>{
      setVote(direction)
    })
  }

  return(
    <Container>
      <User>
        <strong>{post.username}</strong>
      </User>
      <Text>
        {text()}
      </Text>
      <Footer>
        <MyArrowUpIcon vote={vote} onClick={()=>votePut(1)}/>
        <p>{post.votesCount}</p>
        <MyArrowDownIcon vote={vote} onClick={()=>votePut(-1)}/>
        {setShowDetails?(
          <Comments onClick={()=>setShowDetails(post.id)} click>
            <MyCommentIcon />
            <p>{post.commentsCount} Comentário</p>
            {post.commentsCount>1 &&
              <p>s</p>
            }
          </Comments>

        ):(
          <Comments >
            <MyCommentIcon />
            <p>{post.commentsCount} Comentários</p>
          </Comments>
        )}

      </Footer>
    </Container>
  )
}