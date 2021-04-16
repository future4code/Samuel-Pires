export const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/samuel-mateus-cruz'

export function headers(token){
  return{
    headers:{
      auth: token
    }
  }
}