import * as jwt from 'jsonwebtoken'

export type Authentication_data={
  id : string
}

const expiresIn = {expiresIn:'1d'}

export function  generate_token(payload : Authentication_data):string{
  return jwt.sign(
    payload,
    process.env.JWT_KEY as string,
    expiresIn
  )
}

export function get_data_token(token:string):Authentication_data{
  return jwt.verify(token, process.env.JWT_KEY as string) as Authentication_data
}