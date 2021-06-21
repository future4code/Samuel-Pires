export type userLoginData = {
  email : string,
  password : string
}

export type userData = userLoginData & {
  id : string,
  name : string,
}

export type userDTO = {
  name: any,
  email : any,
  password : any
}

export type friendship = {
  id : string
}

export type friendshipData = {
  user_a : string,
  user_b : string
}

export const toFriendshipDataModel = (idA : string, idB : string):friendshipData=>{
  return {
    user_a : idA,
    user_b : idB
  }
}