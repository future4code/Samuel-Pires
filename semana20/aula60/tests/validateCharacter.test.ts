import {Character} from "../model/interfaces";
import {validateCharacter} from "../src/validateCharacter";

const characterValido : Character = {
  name:'valido',defense:10,life:20,strength:20
}

describe('Teste para validar o input de um character', () => {
  test('Nome vazio', ()=>{
    const output = validateCharacter({...characterValido, name:''})
    expect(output).toBe(false)
  })
  test('Vida igual a 0', ()=>{
    const output = validateCharacter({...characterValido, life: 0})
    expect(output).toBe(false)
  })
  test('Força igual a 0', ()=>{
    const output = validateCharacter({...characterValido, strength:0})
    expect(output).toBe(false)
  })
  test('Defesa igual a 0', ()=>{
    const output = validateCharacter({...characterValido, defense: 0})
    expect(output).toBe(false)
  })
  test('Vida negativa', ()=>{
    const output = validateCharacter({...characterValido, life:-5})
    expect(output).toBe(false)
  })
  test('Válido', ()=>{
    const output = validateCharacter(characterValido)
    expect(output).toBe(true)
  })
})