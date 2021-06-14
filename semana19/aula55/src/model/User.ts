import {ROLE} from "./ROLE";

export type UserLogin = {
  email : string,
  password: string
}
export type User = UserLogin & {
  name:string,
  role : ROLE
}

export type UserData = User & {id : string}

