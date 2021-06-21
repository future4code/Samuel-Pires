import {userData, userDTO} from "../../model/user";
import CustomError from "../CustomError";
import validateEmail from "../../services/validates/validateEmail";
import {generateId} from "../../services/idGenerator";
import {generateHash} from "../../services/hash";
import Database from "../../data/Database";
import {LABOOK_USERS} from "../../constants/tables";
import {generateToken} from "../../services/token";

const signupUser = async (input : userDTO):Promise<string>=>{
  try{
    if(!input.name){
      throw new CustomError(406, 'Missing name.')
    }
    if(!validateEmail(input.email)){
      throw new CustomError(406, 'E-mail invalid.')
    }
    if(!input.password){
      throw new CustomError(406, 'Missing password.')
    }

    const userData : userData = {
      ...input,
      id : generateId(),
      password : generateHash(input.password)
    }

    const db = new Database(LABOOK_USERS)
    await db.insertGeneric(userData)
    return generateToken({id: userData.id})
  }catch (err){
    if(err.sqlMessage && err.sqlMessage.includes('Duplicate entry')){
      throw new CustomError(409, 'E-mail already exists')
    }
    else if(err.sqlMessage){
      throw new CustomError(500,  'Internal server error')
    }
    throw new CustomError(err.statusCode || 400, err.message)
  }

}

export default signupUser