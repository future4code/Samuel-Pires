import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 300px;
  justify-content: center;
`
const InputNome = styled.input`
  margin: 1px 0;
  width: 90%;
`

const InputLink = styled(InputNome)`
  margin: 1px 5px;
  width: 40%;
`

class App extends React.Component {
  state = {
    posts : [
      {
        nomeUsuario: "samuel",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "vitoria",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario: "aline",
        fotoUsuario: "https://picsum.photos/49/50",
        fotoPost: "https://picsum.photos/201/150"
      },
    ],
    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: ""
  }

  onChangeNomeUsuario = (event)=>{
    this.setState({
      nomeUsuario: event.target.value
    })
  }

  onChangeLinkFotoUsuario = (event)=>{
    this.setState({
      fotoUsuario: event.target.value
    })
  }

  onChangeLinkFotoPost = (event)=>{
    this.setState({
      fotoPost: event.target.value
    })
  }

  onClickAdicionarPost = ()=>{
    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost
    }
    
    const Posts = [...this.state.posts, novoPost]
    this.setState({
      posts: Posts
    })
  }

  render() {

    const listaPost = this.state.posts.map((post)=>{
      return <Post 
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    })

    return (
      
      <div className={'app-container'}>
        <Form>
          <InputNome 
            placeholder="Nome de usuário"
            onChange={this.onChangeNomeUsuario}
          />
          <InputLink
            placeholder="Link foto usuário"
            onChange={this.onChangeLinkFotoUsuario}
          />
          <InputLink
            placeholder="Link foto post"
            onChange={this.onChangeLinkFotoPost}
          />
          <button onClick={this.onClickAdicionarPost}>Adicionar post</button>
        </Form>
        <div>{listaPost}</div>
      </div>
    );
  }
}

export default App;
