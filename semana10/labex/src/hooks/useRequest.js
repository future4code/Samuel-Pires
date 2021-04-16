import axios from "axios"
import { useState } from "react"

export const useGetApi=(msgError, msgOK)=>{
  const [value, setValue] = useState()

  const getApi = async(url, config)=>{
    try{
      const res = await axios.get(url, config)
      setValue(res.data)
      if(msgOK)alert(msgOK)
    }
    catch(err){
      if(msgError && msgError.length>0)alert(msgError)
    }
  }

  return [value, getApi]
}
