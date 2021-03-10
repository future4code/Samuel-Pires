let qtdTarefa =0;

function botaoCriarTarefa(){
  const tarefa = document.getElementById("tarefa").value

  if(tarefa!==""){
    document.getElementById("tarefa").value=""

    const horario = document.getElementById("horario").value
    const diaSemana = document.getElementById("dias-semana").value
    document.getElementById(diaSemana).innerHTML+=`<p onclick=cliqueiNaTarefa("p-id${qtdTarefa}") id=p-id${qtdTarefa} class=hora${horario}>${tarefa}</p>`
    qtdTarefa++
  }
  else{
    alert("Tarefa em branco, adicione alguma coisa!")
  }
}

function cliqueiNaTarefa(pId){
  const elemento = document.getElementById(pId)
  elemento.innerHTML = "<s>"+elemento.innerHTML+"</s>"
}

function limpaTarefas(){
  const elementos = document.querySelectorAll(".semana > div")
  
  for(let i=0; i<elementos.length; i++){
    elementos[i].innerHTML = ""
  }
  
}