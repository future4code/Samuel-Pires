export default function config(){
  const token = window.localStorage.getItem('token')
  return {
    headers:{
      Authorization: token
    }
  }
}