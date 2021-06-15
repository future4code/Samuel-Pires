import { connection } from "../connection";
import {taskRequest, toTaskRequest} from "../../model/task";

export const selectTaskById = async (
   id: string
): Promise<taskRequest> => {
   const result = await connection.raw(`
        SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
        JOIN to_do_list_users AS users
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `)

   return toTaskRequest(result[0][0])
}