import { Connection } from 'typeorm';
import {  RptZzzh } from 'src/app/entities/RptZzzh.entity';

export const RptZzzhProviders = [
  {
    provide: 'RptZzzhToken',
    useFactory: (connection: Connection) => connection.getRepository(RptZzzh),
    inject: ['APPCONNECTION'],
  },
];
