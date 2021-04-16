import axios from 'axios'
import { headers } from './parameters';

const applyToTripApi=async(baseUrl, form)=>{
  try{
    await axios.post(`${baseUrl}/trips/${form.trip}/apply`, form)
    alert('Sucesso ao aplicar para viagem')
  }catch(err){
    alert('Erro ao tentar aplicar para viagem')
  }
}
export default applyToTripApi