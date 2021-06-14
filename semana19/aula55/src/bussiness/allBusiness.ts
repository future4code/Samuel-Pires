import {UserData} from "../model/User";
import {getTokenData} from "../services/token";
import selectGeneric from "../data/selectGeneric";

export default async function allBusiness(token : string) : Promise<UserData[]> {
  getTokenData(token)
  const usersData = await selectGeneric<UserData[]>(
    'User_Arq',
    '*',
    {}
  )
  if(usersData.length===0){
    throw new Error('Table empty.')
  }
  return usersData
}