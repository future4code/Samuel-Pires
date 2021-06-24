import {friendship, friendshipData, toFriendshipDataModel} from "../../../model/user";
import {getTokenData} from "../../../services/token";
import CustomError from "../../CustomError";
import Database from "../../../data/Database";
import {LABOOK_USERS} from "../../../constants/tables";

const valideInputs = async(input : friendship, token:string):Promise<friendshipData>=>{
  if(!input.id || input.id.length!==36){
    throw new Error('Invalid id of friend')
  }

  const payload = getTokenData(token)
  if(payload.id === input.id){
    throw new CustomError(403, "You can't be your friend")
  }
  const databaseUsers = new Database(LABOOK_USERS)

  const [userData] = await databaseUsers.selectGeneric(['id'], {id:payload.id})
  if(!userData){
    throw new CustomError(404, 'User not found.')
  }

  const [userDataFriend] = await databaseUsers.selectGeneric(['id'], {id:input.id})
  if(!userDataFriend){
    throw new CustomError(404, 'Friend not found')
  }
  return toFriendshipDataModel(payload.id, input.id)
}

export default valideInputs