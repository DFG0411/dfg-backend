import * as dotenv from 'dotenv';
import { resolve } from 'path';
// import { Dialect } from 'sequelize/types';
import { IDatabaseConfig } from './interfaces/IDatabase';
import { LoggerOptions } from 'typeorm/logger/LoggerOptions';
dotenv.config();
console.log(
  `\n--------------------------------------- NODE_ENV =`,
  process.env.NODE_ENV,
  ` ---------------------------------------\n`,
);

switch (process.env.NODE_ENV) {
  case 'development':
    dotenv.config({ path: resolve(__dirname, '../../../.env.development') });
    break;

  case 'production':
    dotenv.config({ path: resolve(__dirname, '../../../.env.production') });
    break;

  default:
    dotenv.config({ path: resolve(__dirname, '../../../.env.development') });
    break;
}
console.log(resolve(__dirname, '../../../.env.development'))
const {  db_name,db_host,db_port,db_username,db_password,db_database,db_synchronize,db_logging} = process.env;
 

// export const databaseConfig: IDatabaseConfig = {
//   name:db_name || 'AdminConnection',
//     username: db_username || '',
//     password: db_password || '',
//     database: db_database || '',
//     host: db_host || '127.0.0.1',
//     port: Number(db_port) || 5432,
//     synchronize: db_synchronize=='true' ,
//     logging:db_logging?db_logging.split(',') as LoggerOptions:[] as LoggerOptions

export const databaseConfig: IDatabaseConfig = {
  name:db_name || 'AdminConnection',
    username: db_username || '',
    password: db_password || '',
    database: db_database || '',
    host: db_host || '10.151.40.107',
    port: Number(db_port) || 5432,
    synchronize: db_synchronize=='true' ,
    logging:db_logging?db_logging.split(',') as LoggerOptions:[] as LoggerOptions
};
