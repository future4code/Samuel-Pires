export type taskData = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskData & { id: string }

export type taskRequest = task & {
   status : string,
   authorNickname : string
}

export type taskRequestDTO = {
   title : any,
   description : any,
   deadline : any,
   author_id : any,
   id : any,
   status : any,
   nickname : any
}

export const toTaskRequest = (taskRequest : taskRequestDTO) : taskRequest=>{
   return {
      authorId : String(taskRequest.author_id),
      deadline : String(taskRequest.deadline),
      description: String(taskRequest.description),
      title : String(taskRequest.title),
      id : String(taskRequest.id),
      status : String(taskRequest.status),
      authorNickname : String(taskRequest.nickname)
   }
}