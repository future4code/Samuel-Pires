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

