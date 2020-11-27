// import { Database } from 'arangojs';
import {Connection, Repository} from 'typeorm';
import {File} from '../entities/file.entity';

export const fileProviders = [
  {
    provide: 'File_MODEL_TOKEN',
    inject: ['ADMCONNECTION'],
    useFactory: (connection: Connection) :Repository<File>=>  connection.getRepository(File),

  },
  // {
  //   provide: USER_MODEL_TOKEN,
  //   useFactory: (db: Database) =>  db.collection('users'),
  //   inject: [DB_CONNECTION_TOKEN],
  // },
];
