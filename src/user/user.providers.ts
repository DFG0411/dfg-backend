// import { Database } from 'arangojs';
import {Connection, Repository} from 'typeorm';
// import { UserSchema } from './schemas/user.schema';
import {  USER_MODEL_TOKEN_MSSQL,  MSSQL_CONNECTION_TOKEN} from '../server.constants';
import {UserEntity} from '../adminentities/user.entity';

export const userProviders = [
  {
    provide: 'USER_MODEL_TOKEN',
    useFactory: (connection: Connection) :Repository<UserEntity>=>  connection.getRepository(UserEntity),
    inject: ['ADMCONNECTION'],
  },
  // {
  //   provide: USER_MODEL_TOKEN,
  //   useFactory: (db: Database) =>  db.collection('users'),
  //   inject: [DB_CONNECTION_TOKEN],
  // },
];
