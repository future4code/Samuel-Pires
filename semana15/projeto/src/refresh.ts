import {Client} from "./types";
import {analise_Today} from "./data";

export function refresh(client : Client):Client{
  client.statement.forEach((cs, i)=>{
    if(!analise_Today(new Date(cs.date))){
      if(!cs.refresh){
        client.statement[i].refresh=true
        client.balance+=client.statement[i].value
      }
    }
  })
  return client
}