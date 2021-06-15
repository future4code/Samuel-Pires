export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type userData = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type user = userData & { id: string }

export type signupInputDTO = {
   name : any,
   nickname : any,
   email : any,
   password : any,
   role : any
}

export const toUserROLE = (value : string) : USER_ROLES =>{
   switch (value) {
      case 'NORMAL' || 'normal':
         return USER_ROLES.NORMAL
      case 'ADMIN' || 'admin':
         return USER_ROLES.ADMIN
      default:
         return USER_ROLES.NORMAL
   }
}

export const toUserDataModel = (input : signupInputDTO) : userData =>{
   return {
      email : input.email,
      password : input.password,
      role : toUserROLE(input.role),
      name: input.name,
      nickname: input.nickname
   }
}