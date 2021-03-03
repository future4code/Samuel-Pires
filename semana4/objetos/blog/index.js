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
    const postBlog = {
      titulo : "",
      autor : "",
      conteudo : "",
      imagem : ""
    }

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

    inserirPost()

    window.open("posts.html", "_blank")
  }

}

function inserirPost(){
  
  localStorage.setItem("tamanho", arrayPostBlog.length)
  for(let i=0; i<arrayPostBlog.length; i++){
    localStorage.setItem(`titulo${i}`, arrayPostBlog[i].titulo)
    localStorage.setItem(`autor${i}`, arrayPostBlog[i].autor)
    localStorage.setItem(`conteudo${i}`, arrayPostBlog[i].conteudo)
    localStorage.setItem(`imagem${i}`, arrayPostBlog[i].imagem)
  }

}

