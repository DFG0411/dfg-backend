// import { Dialect } from 'sequelize/types';

import { LoggerOptions } from "typeorm/logger/LoggerOptions";
// import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

export interface IDatabaseConfig {
  name:string,
  username: string,
  password: string,
  database: string,
  host: string,
  port: number,
  synchronize:boolean,
  logging:LoggerOptions
}

// export interface IDatabaseConfig {
//   develop: IDatabaseConfigAttributes;
//   production: IDatabaseConfigAttributes;
//   test: IDatabaseConfigAttributes;
// }
