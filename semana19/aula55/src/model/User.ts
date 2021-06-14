import {ROLE} from "./ROLE";

export type User = {
  name:string,
  email:string,
  password:string,
  role : ROLE
}

export type UserData = User & {id : string}

