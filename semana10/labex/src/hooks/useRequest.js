import axios from "axios"
import { useState } from "react"
import { baseUrl } from "../assets/parameters"

export const useGetApi=(msgError, msgOK, callback)=>{
  const [value, setValue] = useState()

  const getApi = async(endpoint, config)=>{
    try{
      const res = await axios.get(`${baseUrl}${endpoint}`, config)
      setValue(res)
      if(typeof callback==='function')callback(res)
      if(msgOK && msgOK.length>0)alert(msgOK)
    }
    catch(err){
      if(msgError && msgError.length>0)alert(msgError)
    }
  }

  return [value, getApi]
}

export const usePostApi=(msgError, msgOK, callback)=>{
  const [value, setValue] = useState()

  const postApi = async(endpoint, data, config)=>{
    try{
      const res = await axios.post(`${baseUrl}${endpoint}`, data, config)
      if(res){
        setValue(res)
        if(typeof callback==='function')callback(res)
      }
      if(msgOK && msgOK.length>0)alert(msgOK)
    }
    catch(err){
      if(msgError && msgError.length>0)alert(msgError)
    }
  }

  return [value, postApi]
}

// import axios from 'axios'

// const loginApi = async(baseUrl, form, history)=>{
//   try{
//     const res = await axios.post(`${baseUrl}/login`,form)
//     window.localStorage.setItem('token', res.data.token)
//     history.push('/admin/trips/list')
//   }
//   catch(err){
//     alert(err.response.data.message)
//   }
// }

// export default loginApi