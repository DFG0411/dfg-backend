import { Connection, Repository } from 'typeorm';
import { StockTaking } from '../appentities/stocktaking.entity';

export const StockTakingProviders = [
  {
    provide: 'StockTakingRepositoryToken',
    inject: ['APPCONNECTION'],
    useFactory: (connection: Connection):Repository<StockTaking> =>
      connection.getRepository(StockTaking),

  },
];
