import { config } from "dotenv";
config();

export const SECRET_KEY = process.env.SECRET_KEY;
export const MYSQLHOST = process.env.MYSQLHOST;
export const MYSQLUSER = process.env.MYSQLUSER;
export const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
export const MYSQL_DATABASE = process.env.MY_SQL_DATABASE;
export const MYSQLPORT = process.env.MYSQLPORT;
