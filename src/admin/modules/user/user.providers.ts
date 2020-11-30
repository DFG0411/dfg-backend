// import { Database } from 'arangojs';
import {Connection, Repository} from 'typeorm';
import {User} from '../../entities/user.entity';

export const userProviders = [
  {
    provide: 'USER_MODEL_TOKEN',
    inject: ['ADMCONNECTION'],
    useFactory: (connection: Connection) :Repository<User>=>  connection.getRepository(User),

  },
  // {
  //   provide: USER_MODEL_TOKEN,
  //   useFactory: (db: Database) =>  db.collection('users'),
  //   inject: [DB_CONNECTION_TOKEN],
  // },
];
