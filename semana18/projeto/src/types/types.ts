import {ROLE} from "../enums/enums";

export type User = {
  name : string,
  email : string,
  password : string,
  role : ROLE
}

export type Recipe = {
  title : string,
  description : string,
  create_at : number,
  user_id : string
}

export type Follow = {
  user_id : string,
  following_user_id : string
}

export type Payload_token = {
  id : string,
  role : ROLE
}