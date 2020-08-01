import { Connection } from 'typeorm';
import { History } from '../appentities/history.entity';

export const HistoryProviders = [
  {
    provide: 'HistoryRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(History),
    inject: ['APPCONNECTION'],
  },
];
