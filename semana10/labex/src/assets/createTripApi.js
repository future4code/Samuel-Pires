import axios from 'axios'
import {headers} from './parameters'

const createTripApi = async(baseUrl, form) => {
  const token = window.localStorage.getItem("token");
  try {
    await axios.post(`${baseUrl}/trips`, form, headers(token));
    alert("Sucesso ao criar viagem.");
  } catch (err) {
    alert("Erro ao criar a viagem, por favor tente novamente mais tarde.")
  }
};

export default createTripApi