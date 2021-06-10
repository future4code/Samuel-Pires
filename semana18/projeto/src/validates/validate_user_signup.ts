import {User} from "../types/types";
import validate_email from "./validate_email";
import {ROLE} from "../enums/enums";
import generate_id from "../services/id";
import {generate_hash} from "../services/hash";

const keys = ['name', 'email', 'password', 'role']


export default function validate_user_signup(user : User): boolean | string{
  let message = 'Você precisa inserir '

  if(!user.name)
    message+="'name' "
  if(!user.email || !validate_email(user.email))
    message+="'email(email@email.com)' "
  if(!user.password || user.password.length<6)
    message+="'password(min 6 caracteres)' "
  if(!user.role || !(user.role in ROLE))
    message+="'role: ADMIN ou NORMAL'"
  if(message.length>21)
    return message
  else return true
}