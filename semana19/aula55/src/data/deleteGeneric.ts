import connection from "../services/connection";

export default async function deleteGeneric(tableName : string, where : {}) {
  await connection(tableName)
    .delete()
    .where(where)
}