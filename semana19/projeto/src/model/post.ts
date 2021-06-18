import {generateId} from "../services/idGenerator";

enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event"
}

const postTypes = (value : string) : POST_TYPES =>{
  switch (value.toLowerCase()){
    case 'normal':
      return POST_TYPES.NORMAL
    case 'evento':
      return POST_TYPES.EVENT
    default:
      return POST_TYPES.NORMAL
  }
}

type post = {
  id: string,
  photo: string,
  description: string,
  type: POST_TYPES,
  createdAt: Date,
  authorId: string
}

type postData = {
  id: string,
  photo: string,
  description: string,
  type: POST_TYPES,
  created_at: Date,
  author_id: string
}

type postDTO = {
  photo : any,
  description : string,
  type : any,
  createAt : any,
  authorId : any
}

export const toPostDataModel = (input : postDTO) : postData=>{
  return {
    id : generateId(),
    photo : String(input.photo),
    description : String(input.description),
    type : postTypes(String(input.type)),
    author_id : String(input.authorId),
    created_at : new Date(input.createAt)
  }
}