import { Connection } from 'typeorm';
import {  Uninvoiced } from 'src/app/entities/Uninvoiced.entity';

export const UninvoicedProviders = [
  {
    provide: 'UninvoicedToken',
    useFactory: (connection: Connection) => connection.getRepository(Uninvoiced),
    inject: ['APPCONNECTION'],
  },
];
