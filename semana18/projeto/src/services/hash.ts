import {genSaltSync, hashSync, compareSync} from 'bcryptjs'

export function generate_hash(text:string):string{
  return hashSync(text, genSaltSync(Number(process.env.HASH_COST)).toString())
}

export function compare_hash(text:string, hash:string):boolean{
  return compareSync(text, hash)
}