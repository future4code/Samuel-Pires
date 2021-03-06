import axios from "axios"
import { useState } from "react"
import { baseUrl } from "../assets/parameters"

function message(msg){
  if(typeof msg==='string' && msg.length>0)alert(msg)
}

//-------------------------------------GET
export const useGetApi=(msgError, msgOK, callback)=>{
  const [value, setValue] = useState()

  const getApi = async(endpoint, config)=>{
    try{
      const res = await axios.get(`${baseUrl}${endpoint}`, config)
      setValue(res)
      if(typeof callback==='function')callback(res)
      message(msgOK)
    }
    catch(err){
      message(msgError)
    }
  }

  return [value, getApi]
}

//-------------------------------------POST
export const usePostApi=(msgError, msgOK, callback)=>{
  const [value, setValue] = useState()

  const postApi = async(endpoint, data, config)=>{
    try{
      const res = await axios.post(`${baseUrl}${endpoint}`, data, config)
      if(res){
        setValue(res)
        if(typeof callback==='function')callback(res)
      }
      message(msgOK)
    }
    catch(err){
      message(msgError)
    }
  }

  return [value, postApi]
}

export const postApi=async(endpoint, data, config, msgError, msgOK, callback)=>{
  try{
    const res = await axios.post(`${baseUrl}${endpoint}`, data, config)
    if(res && typeof callback==='function')callback(res)
    message(msgOK)
  }
  catch(err){
    message(msgError)
  }
}

//-------------------------------------PUT
export const usePutApi=(msgError, msgOK, callback)=>{
  const [value, setValue] = useState()

  const putApi = async(endpoint, data, config)=>{
    try{
      const res = await axios.put(`${baseUrl}${endpoint}`, data, config)
      if(res){
        setValue(res)
        if(typeof callback==='function')callback(res)
      }
      message(msgOK)
    }
    catch(err){
      message(msgError)
    }
  }

  return [value, putApi]
}

export const putApi=async(endpoint, data, config, msgError, msgOK, callback)=>{
  try{
    const res = await axios.put(`${baseUrl}${endpoint}`, data, config)
    if(res && typeof callback==='function')callback(res)
    message(msgOK)
  }
  catch(err){
    message(msgError)
  }
}

//-------------------------------------DEL

export const useDelApi=(msgError, msgOK, callback)=>{
  const [value, setValue] = useState()

  const delApi = async(endpoint, config)=>{
    try{
      const res = await axios.delete(`${baseUrl}${endpoint}`, config)
      if(res){
        setValue(res)
        if(typeof callback==='function')callback(res)
      }
      message(msgOK)
    }
    catch(err){
      message(msgError)
    }
  }

  return [value, delApi]
}

export const delApi=async(endpoint, config, msgError, msgOK, callback)=>{
  try{
    const res = await axios.delete(`${baseUrl}${endpoint}`, config)
    if(res && typeof callback==='function')callback(res)
    message(msgOK)
  }
  catch(err){
    message(msgError)
  }
}