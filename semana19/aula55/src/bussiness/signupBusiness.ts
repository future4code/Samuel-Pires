import {User, UserData} from "../model/User";
import validateInput from "./validates/validateInput";
import validateEmail from "./validates/validateEmail";
import validateROLE from "./validates/validateROLE";
import {generateId} from "../services/idGenerator";
import {generateToken} from "../services/token";
import {generateHash} from "../services/hash";
import insertGeneric from "../data/insertGeneric";

export default async function signupBusiness(user : User) : Promise<string> {
  validateInput(user)
  if(!validateEmail(user.email)){
    throw new Error('Você precisa preencher o e-mail corretamente: email@email.com')
  }
  if(!validateROLE(user.role)){
    throw new Error('Você precisa preencher role corretamente: ADMIN OU NORMAL')
  }

  const userData : UserData = {
    ...user,
    password: generateHash(user.password),
    id: generateId()
  }
  await insertGeneric('User_Arq', userData)

  return generateToken({id: userData.id, role: userData.role})

}