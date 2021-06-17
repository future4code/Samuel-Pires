import {v4} from 'uuid'

export default function generate_id():string{
  return v4()
}