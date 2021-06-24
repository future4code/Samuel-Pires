import {genSaltSync, hashSync, compareSync} from 'bcryptjs'

export function generateHash(text:string):string{
  return hashSync(text, genSaltSync(Number(process.env.BCRYPTJ_COST)).toString())
}

export function compareHash(text:string, hash:string):boolean{
  return compareSync(text, hash)
}