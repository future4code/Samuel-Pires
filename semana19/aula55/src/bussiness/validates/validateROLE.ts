import {ROLE} from "../../model/ROLE";

export default function validateROLE(role : ROLE) : boolean{
  return Object.values(ROLE).includes(role)
}