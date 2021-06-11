import {ROLE} from "../enums/enums";

export type User = {
  name : string,
  email : string,
  password : string,
  role : ROLE,
  id : string
}

export type Recipe = {
  title : string,
  description : string,
  create_at : number,
  user_id : string,
  id : string
}

export type Follow = {
  user_id : string,
  user_to_follow_id : string
}

export type Payload_token = {
  id : string,
  role : ROLE
}