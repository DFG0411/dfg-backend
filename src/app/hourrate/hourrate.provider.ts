import { Connection, Repository } from 'typeorm';
import { HourRate } from '../entities/hourrate.entity';

export const HourRateProviders = [
  {
    provide: 'HourRateRepositoryToken',
    useFactory: (connection: Connection):Repository<HourRate> => connection.getRepository(HourRate),
    inject: ['APPCONNECTION'],
  },
];
