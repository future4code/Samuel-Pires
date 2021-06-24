import {post, postData, postDTO, postTypes, toPostDataModel} from "../../model/post";
import CustomError from "../CustomError";
import {getTokenData} from "../../services/token";
import {generateId} from "../../services/idGenerator";
import Database from "../../data/Database";
import {LABOOK_POSTS} from "../../constants/tables";

const createPost=async(input : postDTO, token : string) : Promise<void> => {
  try{
    const payload = getTokenData(token)
    if(!input.photo || typeof input.photo!=='string'){
      throw new CustomError(406, 'Missing photo.')
    }
    if(!input.description || typeof input.description!=='string'){
      throw new CustomError(406, 'Missing description.')
    }

    const date = new Date(input.createdAt)
    if(!date.getMonth()){
      input.createdAt = new Date()
    }
    input.type = postTypes(input.type)

    const postData : postData = toPostDataModel({
      ...input,
      authorId : payload.id,
      id : generateId()
    } as post)

      const db =  new Database(LABOOK_POSTS)
    await db.insertGeneric(postData)
  }
  catch (err){
    if(err.message.includes('jwt invalid')){
      throw new CustomError(401, 'Token invalid')
    }
    else if(err.message.includes('jwt expired')){
      throw new CustomError(403, 'Token expired')
    }
    else if(err.sqlMessage){
      throw new CustomError(500, 'Internal Server Error')
    }
    throw new CustomError(err.statusCode, err.message)
  }
}

export default createPost