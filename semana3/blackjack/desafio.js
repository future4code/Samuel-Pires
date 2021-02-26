/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

if(confirm('Quer iniciar uma nova rodada?')){

   let cartaUsuario = [comprarCarta(), comprarCarta()]
   let cartaPC = [comprarCarta(), comprarCarta()]
   
   while((cartaUsuario[0].valor===11 && cartaUsuario[1].valor===11)||(cartaPC[0].valor===11 &&
   cartaPC[1].valor===11)){
      cartaUsuario = [comprarCarta(), comprarCarta()]
      cartaPC = [comprarCarta(), comprarCarta()]
      console.log('1:')
   }

   pontuacaoUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor;
   pontuacaoPC = cartaPC[0].valor + cartaPC[1].valor;
   
   console.log('2:',cartaUsuario[0].texto)
   if(confirm('Suas cartas são: '+ cartaUsuario[0].texto+' '+cartaUsuario[1].texto+'. '+
   'A carta revelada do computador é '+cartaPC[0].texto+ '\n Deseja comprar mais uma carta?')){
      cartaUsuario.push(comprarCarta())
      pontuacaoUsuario += cartaUsuario[cartaUsuario.length-1].valor;
      if(pontuacaoUsuario<21){
         while(confirm('Sua pontuação é '+ pontuacaoUsuario +'Deseja comprar mais uma carta?')){
            cartaUsuario.push(comprarCarta())
            pontuacaoUsuario += cartaUsuario[cartaUsuario.length-1].valor;
            if(pontuacaoUsuario>=21){break}
         }
      }
   }
   if(pontuacaoUsuario<=21){
      while(pontuacaoPC < pontuacaoUsuario){
         cartaPC.push(comprarCarta())
         pontuacaoPC += cartaPC[cartaPC.length-1].valor;
      }
   }

   console.log('Suas cartas são', cartaUsuario, 'Sua pontuação é', pontuacaoUsuario)
   console.log('As cartas do computador são', cartaPC,
   'A pontuação do computador é', pontuacaoPC)

   if(pontuacaoUsuario>21){
      console.log('O computador ganhou!')
   }
   else if(pontuacaoPC>21){
      console.log('O usuário ganhou!')
   }
   else if(pontuacaoUsuario<=21 && pontuacaoPC<=21){
      if(pontuacaoPC>pontuacaoUsuario)console.log('O computador ganhou!')
      else if(pontuacaoPC<pontuacaoUsuario)console.log('O usuário ganhou!')
      else console.log('Empate!')
   }

 }
 else{
    console.log('O jogo acabou')
 }