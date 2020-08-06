// import { Database } from 'arangojs';
import {Connection, Repository} from 'typeorm';
import {UserEntity} from '../entities/user.entity';

export const userProviders = [
  {
    provide: 'USER_MODEL_TOKEN',
    inject: ['ADMCONNECTION'],
    useFactory: (connection: Connection) :Repository<UserEntity>=>  connection.getRepository(UserEntity),

  },
  // {
  //   provide: USER_MODEL_TOKEN,
  //   useFactory: (db: Database) =>  db.collection('users'),
  //   inject: [DB_CONNECTION_TOKEN],
  // },
];
