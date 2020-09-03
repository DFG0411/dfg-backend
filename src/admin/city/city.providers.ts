// import { Database } from 'arangojs';
import {Connection, Repository} from 'typeorm';
import {City} from '../entities/city.entity';
import { createInferTypeNode } from 'typescript';

export const CityProviders = [
  {
    provide: 'CITY_MODEL_TOKEN',
    inject: ['ADMCONNECTION'],
    useFactory: (connection: Connection) :Repository<City>=>  connection.getRepository(City),

  },
  // {
  //   provide: USER_MODEL_TOKEN,
  //   useFactory: (db: Database) =>  db.collection('users'),
  //   inject: [DB_CONNECTION_TOKEN],
  // },
];
