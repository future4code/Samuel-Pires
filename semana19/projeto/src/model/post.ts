import {generateId} from "../services/idGenerator";

enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event"
}

export const postTypes = (value : any) : POST_TYPES =>{
  switch (String(value).toLowerCase()){
    case 'normal':
      return POST_TYPES.NORMAL
    case 'evento':
      return POST_TYPES.EVENT
    default:
      return POST_TYPES.NORMAL
  }
}

export type post = {
  id: string,
  photo: string,
  description: string,
  type: POST_TYPES,
  createdAt: Date,
  authorId: string
}

export type postData = {
  id: string,
  photo: string,
  description: string,
  type: POST_TYPES,
  created_at: Date,
  author_id: string
}

export type postDTO = {
  photo : any,
  description : any,
  type : any,
  createdAt?: any,
}

export const toPostDataModel = (post : post) : postData=>{
  return {
    id:post.id,
    created_at: post.createdAt,
    type: post.type,
    author_id: post.authorId,
    description: post.description,
    photo: post.photo
  }
}

export const toPostModel = (post : postData) : post=>{
  return {
    id:post.id,
    createdAt: post.created_at,
    type: post.type,
    authorId: post.author_id,
    description: post.description,
    photo: post.photo
  }
}