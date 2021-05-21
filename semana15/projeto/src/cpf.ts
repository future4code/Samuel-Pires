export function validate_cpf(cpf:string):boolean{
  let cpfValido : RegExp= /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/
  return cpfValido.test(cpf)
}