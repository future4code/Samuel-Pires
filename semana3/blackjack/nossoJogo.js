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
   const cartaUsuario = [comprarCarta(), comprarCarta()]
   const cartaPC = [comprarCarta(), comprarCarta()]

   pontuacaoUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor;
   pontuacaoPC = cartaPC[0].valor + cartaPC[1].valor;

   console.log('Usuário: - cartas:', cartaUsuario[0].texto, cartaUsuario[1].texto,
   '- pontuação', pontuacaoUsuario)
   console.log('Computador: - cartas:', cartaPC[0].texto, cartaPC[1].texto,
   '- pontuação', pontuacaoPC)

   if(pontuacaoUsuario>pontuacaoPC)console.log('O usuário ganhou!')
   else if(pontuacaoUsuario<pontuacaoPC)console.log('O computador ganhou!')
   else console.log('Empate!')
 }
 else{
    console.log('O jogo acabou')
 }