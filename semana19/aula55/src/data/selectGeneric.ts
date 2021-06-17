import connection from "../services/connection";

export default async function selectGeneric <T>(tableName : string, aliases : string | string[], where : {}) : Promise<T> {
  const result =  await connection(tableName)
    .select(aliases)
    .where(where);

  return result as unknown as T
}