// const ultimoPost = {
//   titulo : localStorage.getItem("ultimoPostTitulo"),
//   autor : localStorage.getItem("ultimoPostAutor"),
//   conteudo : localStorage.getItem("ultimoPostConteudo"),
//   imagem : localStorage.getItem("ultimoPostImagem")
// }

// console.log(ultimoPost)

// const containerPost = document.getElementById("container-de-posts")

//   containerPost.innerHTML+=`<div>
//     Título: ${ultimoPost.titulo}<br>
//     Autor: ${ultimoPost.autor}<br>
//     Conteúdo: ${ultimoPost.conteudo}<br>
//     <img src="${ultimoPost.imagem}">
//   </div>`

const containerPost = document.getElementById("container-de-posts")
const tamanho = localStorage.getItem("tamanho")

for(let i=0; i<tamanho; i++){
  containerPost.innerHTML+=`<div> Título: ${localStorage.getItem(`titulo${i}`)}<br>
  Autor: ${localStorage.getItem(`autor${i}`)}<br>
  Conteúdo: ${localStorage.getItem(`conteudo${i}`)}<br>
  <img src="${localStorage.getItem(`imagem${i}`)}">
  `

  console.log(localStorage.getItem(`imagem${i}`))
}
