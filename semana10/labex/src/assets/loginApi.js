import axios from 'axios'

const loginApi = async(baseUrl, form, history)=>{
  try{
    const res = await axios.post(`${baseUrl}/login`,form)
    window.localStorage.setItem('token', res.data.token)
    history.push('/admin/trips/list')
  }
  catch(err){
    alert(err.response.data.message)
  }
}

export default loginApi