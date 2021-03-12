import { createPool } from "mysql";
import { DatabaseTable, QueryOptions } from "./types";

const defaultConfig = {
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

export class DatabaseService {
  private config;
  private connectionPool;

  constructor(config?) {
    this.config = config || defaultConfig;
    this.connectionPool = createPool(this.config);
  }

  public get(tableName: DatabaseTable, queryOptions?: QueryOptions) {}
}
