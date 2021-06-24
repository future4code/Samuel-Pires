import {userDTO} from "../../model/user";
import validateEmail from "../../services/validates/validateEmail";
import CustomError from "../CustomError";
import Database from "../../data/Database";
import {LABOOK_USERS} from "../../constants/tables";
import {compareHash} from "../../services/hash";
import {generateToken} from "../../services/token";

const loginUser = async (input : userDTO):Promise<string>=>{
  try{
    if(!validateEmail(input.email)){
      throw new CustomError(406, 'E-mail invalid.')
    }
    if(!input.password){
      throw new CustomError(406, 'Missing password.')
    }

    const db = new Database(LABOOK_USERS)
    const [userData] = await db.selectGeneric(
      ['id', 'password'],
      {email : input.email}
    )

    if(!userData){
      throw new CustomError(404, 'User not found.')
    }

    if(!compareHash(input.password, userData.password)){
      throw new CustomError(404, 'Password incorrect.')
    }

    return generateToken({id:userData.id})

  }catch (err){
    if(err.sqlMessage){
      throw new CustomError(500, 'Internal server error.')
    }
    throw new CustomError(err.statusCode || 400, err.message)
  }
}

export default loginUser