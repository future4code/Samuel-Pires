import {getTokenData} from "../services/token";
import {ROLE} from "../model/ROLE";
import deleteGeneric from "../data/deleteGeneric";

export default async function delBusiness(id : string, token : string) {
  if(id.length!==36){
    throw new Error('Id is required(36 characters)')
  }
  const payload = getTokenData(token)
  if(payload.role!==ROLE.ADMIN){
    throw new Error('You need to be an admin')
  }
  await deleteGeneric('User_Arq', {id})
}