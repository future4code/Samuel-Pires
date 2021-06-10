import * as jwt from 'jsonwebtoken'
import {Payload_token} from "../types/types";

const expiresIn = {expiresIn:'1d'}

export function  generate_token(payload : Payload_token):string{
  return jwt.sign(
    payload,
    process.env.JWT_KEY as string,
    expiresIn
  )
}

export function get_data_token(token:string):Payload_token{
  return jwt.verify(token, process.env.JWT_KEY as string) as Payload_token
}