import { selectTaskById } from "../../data/task/selectTaskById"

export const getTaskByIdBusiness = async (
   id: string
) => {
   const result = await selectTaskById(id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }

   return result
}