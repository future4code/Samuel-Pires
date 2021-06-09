import { Address } from "./types";
import axios from 'axios'

export default async function get_address(cep:string) : Address{
  const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  return{
    bairro : res.data.bairro as string,
    cidade : res.data.cidade as string,
    estado : res.data.estado as string,
    logradouro: res.data.logradouro as string
  }
}