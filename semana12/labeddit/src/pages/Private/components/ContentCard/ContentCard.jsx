import React, {useState, useEffect, useRef} from 'react'
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
export default function ({value, id}){
  const [hiddenShow, setHiddenShow] = useState('Ver mais');
  const [maxHeight, setMaxHeight] = useState(true);
  const [heightText, setHeightText] = useState(0)
  const [vote, setVote] = useState(0)
  const ref = useRef(null);
  const changeHiddenShow=()=>{
    if(maxHeight){
      setMaxHeight(false)
      setHiddenShow('Esconder...')
    }
    else{
      setMaxHeight(true)
      setHiddenShow('Ver mais...')
    }
  }

  useEffect(()=>{
    const height = ref.current.clientHeight
    console.log('height', height)
    setHeightText(height)
  },[ref])

  return(
    <Container>
      <User>
        <strong>{value.username}</strong>
      </User>
      <Content>
        <Text maxHeight={maxHeight} ref={ref}>
          <p>{value.text}</p>
        </Text>
        {heightText<=95 ? (
          <></>
        ):(
            <a onClick={changeHiddenShow}>{hiddenShow}</a>
        )}
      </Content>
      <Footer>
        <MyArrowUpIcon vote={vote} onClick={()=>setVote(1)}/>
        <p>{value.votesCount}</p>
        <MyArrowDownIcon vote={vote} onClick={()=>setVote(-1)}/>
        <Comments>
          <MyCommentIcon />
          <p>{value.commentsCount} Comentários</p>
        </Comments>
      </Footer>
    </Container>
  )
}