import {Client} from "./types";
import {analise_Today} from "./data";

export function refresh(client : Client):Client{
  for(let cs of client.statement){
    if(!analise_Today(new Date(cs.date))){
      client.balance-=cs.value
    }
  }
  return client
}