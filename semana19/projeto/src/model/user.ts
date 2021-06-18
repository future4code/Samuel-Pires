import {generateId} from "../services/idGenerator";

export type userLogin = {
  email : string,
  password : string
}

export type userData = userLogin & {
  id : string,
  name : string,
}

export type userDTO = {
  name: any,
  email : any,
  password : any
}

export const toUserDataModel = (input : userDTO) : userData=>{
  return {
    id : generateId(),
    email : String(input.email),
    name : String(input.name),
    password : String(input.password)
  }
}

export const toUserLoginModel = (input : userDTO) : userLogin=>{
  return {
    email : String(input.email),
    password : String(input.password)
  }
}