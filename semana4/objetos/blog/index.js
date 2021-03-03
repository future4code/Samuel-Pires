const postBlog = {
  titulo : "",
  autor : "",
  conteudo : "",
  imagem : ""
}

const arrayPostBlog = []

function criarPost(){
  const titulo = document.getElementById("titulo-post")
  const autor = document.getElementById("autor-post")
  const conteudo = document.getElementById("conteudo-post")
  const imagem = document.getElementById("imagem-post")

  if(titulo.value==="" || autor.value==="" || conteudo.value===""){
    alert("Os campos título, autor e conteúdo precisam estar preenchidos")
  }
  else{
    postBlog.titulo = titulo.value
    postBlog.autor = autor.value
    postBlog.conteudo = conteudo.value
    postBlog.imagem = imagem.value

    if(!(postBlog.imagem.includes("http")&&
      (postBlog.imagem.includes(".jpg")||
       postBlog.imagem.includes(".png")))){
          postBlog.imagem = ""
       }

    arrayPostBlog.push(postBlog)
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    imagem.value = ""
  }
  
  inserirPost()
}

function inserirPost(){
  const ultimoPost = arrayPostBlog[arrayPostBlog.length-1]
  const containerPost = document.getElementById("container-de-posts")
  
  containerPost.innerHTML+=`<div>
    Título: ${ultimoPost.titulo}<br>
    Autor: ${ultimoPost.autor}<br>
    Conteúdo: ${ultimoPost.conteudo}<br>
    <img src="${ultimoPost.imagem}">
  </div>`
}

