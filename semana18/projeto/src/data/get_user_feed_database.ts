import {User} from "../types/types";
import connection from "../services/connection";

export default async function get_user_feed_database(id :string): Promise<any> {
  // const [result] = await connection.raw(`
  //   select Recipe.id, title, description, create_at, Recipe.user_id, name
  //   from Follow
  //   join Recipe on Follow.user_to_follow_id = Recipe.user_id
  //   join User on Follow.user_to_follow_id = User.id
  //   where (Follow.user_id = '${id}')
  // `)
  const result = await connection('Follow')
    .select(
      'Recipe.id',
      'title',
      'description',
      'create_at',
      'Recipe.user_id',
      'name'
    ).join(
      'Recipe','Recipe.user_id','Follow.user_to_follow_id'
    ).join(
      'User','User.id','Follow.user_to_follow_id'
    ).where(
      'Follow.user_id',id
    ).orderBy(
      'create_at', 'desc'
    )
  if(result.length===0){
    throw new Error('There are no recipes created by who you follow.')
  }
  return result
}