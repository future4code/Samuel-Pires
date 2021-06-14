import {genSaltSync, hashSync, compareSync} from 'bcryptjs'

export function generateHash(text:string):string{
  return hashSync(text, genSaltSync(12).toString())
}

export function compareHash(text:string, hash:string):boolean{
  return compareSync(text, hash)
}