export function validate_cpf(cpf:(string | undefined)):boolean{
  if(!cpf)return false
  let cpfValido : RegExp= /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/
  return cpfValido.test(cpf)
}