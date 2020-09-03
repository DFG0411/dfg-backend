// import { Database } from 'arangojs';
import {Connection, Repository} from 'typeorm';
import {Province} from '../entities/province.entity';

export const ProvinceProviders = [
  {
    provide: 'PROVINCE_MODEL_TOKEN',
    inject: ['ADMCONNECTION'],
    useFactory: (connection: Connection) :Repository<Province>=>  connection.getRepository(Province),

  },
  // {
  //   provide: USER_MODEL_TOKEN,
  //   useFactory: (db: Database) =>  db.collection('users'),
  //   inject: [DB_CONNECTION_TOKEN],
  // },
];
