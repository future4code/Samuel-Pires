export enum Status {
  TO_DO = 'to do',
  DOING = 'doing',
  DONE = 'done'
}

export type User = {
  id : string
  name : string,
  nickname : string,
  email : string
}

export type Task = {
  id : string,
  description : string,
  date_limit : string,
  creator_id : string,
  status : Status,
  title : string
}
