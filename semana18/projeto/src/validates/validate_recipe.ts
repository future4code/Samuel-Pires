import {Recipe} from "../types/types";

export default function validate_recipe(recipe : Recipe) :boolean | string{
  let message = 'You need to insert '
  if(!recipe.title)
    message+="'title' "
  if(!recipe.description)
    message+="'description' "
  if(message.length>19)
    return message
  else return true
}