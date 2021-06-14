import {v4} from 'uuid'

export function generate_id():string{
  return v4()
}