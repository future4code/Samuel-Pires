import { Address } from "./types";
import axios from 'axios'

export default async function get_address(cep:string) : Promise<Address | null>{
  const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  return{
    bairro : res.data.bairro as string,
    cidade : res.data.localidade as string,
    estado : res.data.uf as string,
    logradouro: res.data.logradouro as string
  }
}