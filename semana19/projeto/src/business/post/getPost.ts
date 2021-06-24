import {post, toPostModel} from "../../model/post";
import CustomError from "../CustomError";
import {getTokenData} from "../../services/token";
import Database from "../../data/Database";
import {LABOOK_POSTS} from "../../constants/tables";

const getPost= async(token : string, where ?: {}) : Promise<post[]> => {
  try{
    const payload = getTokenData(token)
    if(where) {
      for (const key in where) {
        // @ts-ignore
        if (!where[key]) {
          throw new CustomError(406, key + ' is empty')
        }
      }
    }

    const posts = await new Database(LABOOK_POSTS)
      .selectGeneric('*', where)

    if(posts.length===0){
      throw new CustomError(404,'User not found')
    }
    return posts.map(post=>{
      return toPostModel(post)
    })
  }catch (err){
    if(err.message.includes('jwt must be provided'))
      throw new CustomError(401, 'Token is required')
    if(err.message.includes('jwt expired'))
      throw new CustomError(403, 'Token expired')
    else if(err.message.includes('jwt invalid'))
      throw new CustomError(401, 'Token invalid')
    else if(err.sqlMessage)
      throw new CustomError(500, 'Internal server error')
    throw new CustomError(err.statusCode, err.message)
  }

}

export default getPost