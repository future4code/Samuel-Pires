import {toUserDataModel, toUserLoginModel, userData, userDTO, userLogin} from "../model/user";
import Database from "../data/Database";
import CustomError from "../data/CustomError";
import validateEmail from "../services/validates/validateEmail";
import {generateToken} from "../services/token";
import {compareHash, generateHash} from "../services/hash";

export default class User extends Database {

  private readonly user: userData | userLogin | undefined

  constructor(input?: userDTO) {
    super('labook_users');
    if (input) {
      if (input.name) {
        this.user = toUserDataModel(input)
      } else {
        this.user = toUserLoginModel(input)
      }
    }
  }

  private valideData = () => {
    if(!this.user){
      throw new CustomError(422, 'Missing name, email and password')
    }

    const user = this.user as userData
    if (!user.name) {
      throw new CustomError(422, 'Missing name.')
    }
    if (!validateEmail(user.email)) {
      throw new CustomError(422, 'Missing email.')
    }
    if (!user.password) {
      throw new CustomError(422, 'Missing password.')
    }
  }
  private valideLogin = () => {
    const user = this.user as userLogin
    if (!validateEmail(user.email)) {
      throw new CustomError(422, 'Missing email.')
    }
    if (!user.password) {
      throw new CustomError(422, 'Missing password.')
    }
  }

  public signup = async(): Promise<string> => {
    this.valideData()
    const user = this.user as userData

    await this.insertGeneric({
      ...user,
      password : generateHash(user.password)
    })
    return generateToken({id: user.id})
  }

  public login = async() : Promise<string>=>{
    this.valideLogin()
    const user = this.user as userLogin
    const [result] = await this.selectGeneric(['id', 'password'], {email: user.email})
    if(result){
      if(compareHash(user.password, result.password)){
        return generateToken({id:result.id})
      }
    }
    throw new CustomError(401, 'E-mail or password incorrect.')
  }

}