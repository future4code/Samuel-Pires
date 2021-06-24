import {friendship, friendshipData, toFriendshipDataModel} from "../../../model/user";
import {getTokenData} from "../../../services/token";
import Database from "../../../data/Database";
import {LABOOK_FRIENDSHIP, LABOOK_USERS} from "../../../constants/tables";
import CustomError from "../../CustomError";
import valideInputs from "./valideInputs";

const friendshipUser = async(input : friendship, token:string)=>{
  try{

    const friendshipData = await valideInputs(input, token)
    const databaseFriendship = new Database(LABOOK_FRIENDSHIP)
    const [friend] = await databaseFriendship.selectGeneric(
      ['user_a', 'user_b'],
      friendshipData
    )
      .orWhere({user_a:friendshipData.user_b, user_b:friendshipData.user_a})

    if(friend){
      throw new CustomError(403, 'Already friends')
    }

    await databaseFriendship.insertGeneric(friendshipData)
  }catch (err){
    if(err.sqlMessage){
      throw new CustomError(500, 'Internal server error')
    }
    if(err.message.includes('jwt expired')){
      throw new CustomError(403, 'Token expired')
    }
    if(err.message.includes('jwt invalid') ||
      err.message.includes('Unexpected token'))
    {
      throw new CustomError(401, 'Token invalid')
    }

    throw new CustomError(err.statusCode ||400, err.message)
  }
}

export default friendshipUser