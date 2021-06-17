import {UserData, UserLogin} from "../model/User";
import validateEmail from "./validates/validateEmail";
import selectGeneric from "../data/selectGeneric";
import {compareHash} from "../services/hash";
import {generateToken} from "../services/token";

export default async function loginBusiness(userLogin : UserLogin) : Promise<string>{
  if(!validateEmail(userLogin.email)){
    throw new Error('Invalid e-mail. A valid e-mail is email@email.com')
  }
  if(!userLogin.password){
    throw new Error('Password is required.')
  }

  const userData = await selectGeneric<UserData[]>(
    'User_Arq',
    ['id', 'role', 'password'],
    {email : userLogin.email}
  )

  if(userData.length===0){
    throw new Error('E-mail or password incorrect.')
  }

  if(!compareHash(userLogin.password,userData[0].password )){
    throw new Error('E-mail or password incorrect.')
  }

  return generateToken({id: userData[0].id, role: userData[0].role})

}