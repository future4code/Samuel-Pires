import knex from "knex";
import dotenv from "dotenv";
dotenv.config()

export class Database{
  constructor(private readonly tableName : string){}

  protected static connection = knex({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
    }
  })

  public selectGeneric  = (aliases : string[], where={}) : Promise<any>=> {
    return Database.connection(this.tableName)
      .select(aliases)
      .where(where);
  }

  public insertGeneric = (aliases : string[], data : {}) : Promise<any>=>{
    return Database.connection(this.tableName)
      .insert(data)
  }

  public deleteGeneric = (where : {}) : Promise<any>=>{
    return Database.connection(this.tableName)
      .delete()
      .where(where)
  }

  public updateGeneric = (data : {},where : {}) : Promise<any>=>{
    return Database.connection(this.tableName)
      .update(data)
      .where(where)
  }

}