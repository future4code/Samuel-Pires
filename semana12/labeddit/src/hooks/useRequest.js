import axios from "axios"
import { useState } from "react"

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit'
//-------------------------------------GET
export const useGetApi=(initialState)=>{
  const [value, setValue] = useState(initialState)

  const getApi = async(endpoint, config, callbackOk, callbackError)=>{
    try{
      const res = await axios.get(`${baseUrl}${endpoint}`, config)
      if(res)setValue(res)
      if(typeof callbackOk==='function')callbackOk(res, setValue)
    }
    catch(err){
      if(typeof callbackError==='function')callbackError(err)
    }
  }

  return [value, getApi]
}

//-------------------------------------POST
export const usePostApi=(initialState)=>{
  const [value, setValue] = useState(initialState)

  const postApi = async(endpoint, data, config, callbackOk, callbackError)=>{
    try{
      const res = await axios.post(`${baseUrl}${endpoint}`, data, config)
      if(res)setValue(res)
      if(typeof callbackOk==='function')callbackOk(res, setValue)
      }
    catch(err){
      if(typeof callbackError==='function')callbackError(err)
    }
  }

  return [value, postApi]
}

export const postApi=async(endpoint, data, config, callbackOk, callbackError)=>{
  try{
    const res = await axios.post(`${baseUrl}${endpoint}`, data, config)
    if(typeof callbackOk==='function')callbackOk(res)
  }
  catch(err){
    if(typeof callbackError==='function')callbackError(err)
  }
}

//-------------------------------------PUT
export const usePutApi=(intialState)=>{
  const [value, setValue] = useState(intialState)

  const putApi = async(endpoint, data, config, callbackOk, callbackError)=>{
    try{
      const res = await axios.put(`${baseUrl}${endpoint}`, data, config)
      if(res)setValue(res)
      if(typeof callbackOk==='function')callbackOk(res)
    }
    catch(err){
      if(typeof callbackError==='function')callbackError(err)
    }
  }

  return [value, putApi]
}

export const putApi=async(endpoint, data, config, callbackOk, callbackError)=>{
  try{
    const res = await axios.put(`${baseUrl}${endpoint}`, data, config)
    if(typeof callbackOk==='function')callbackOk(res)
  }
  catch(err){
    if(typeof callbackError==='function')callbackError(err)
  }
}

//-------------------------------------DEL

export const useDelApi=(initialState)=>{
  const [value, setValue] = useState(initialState)

  const delApi = async(endpoint, config, callbackOk, callbackError)=>{
    try{
      const res = await axios.delete(`${baseUrl}${endpoint}`, config)
      if(res)setValue(res)
      if(typeof callbackOk==='function')callbackOk(res, setValue)
    }
    catch(err){
      if(typeof callbackError==='function')callbackError(err)
    }
  }

  return [value, delApi]
}

export const delApi=async(endpoint, config, callbackOk, callbackError)=>{
  try{
    const res = await axios.delete(`${baseUrl}${endpoint}`, config)
    if(typeof callbackOk==='function')callbackOk(res)
  }
  catch(err){
    if(typeof callbackError==='function')callbackError(err)
  }
}