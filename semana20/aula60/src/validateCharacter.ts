import {Character} from "../model/interfaces";

export const validateCharacter = (character : Character) : boolean=>{
  return !!character.name &&
    character.life>0 &&
    character.defense>0 &&
    character.strength>0
}