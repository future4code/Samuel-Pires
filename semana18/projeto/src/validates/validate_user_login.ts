import {User} from "../types/types";
import validate_email from "./validate_email";

export default function validate_user_login(user:User): boolean | string{
  let message = 'You need to insert '
  if(!user.email || !validate_email(user.email))
    message+="'email(email@email.com)' "
  if(!user.password || user.password.length<6)
    message+="'password(min 6 caracteres)' "
  if(message.length>21)
    return message
  else return true
}