import { Connection, Repository } from 'typeorm';
import { HourRate } from '../appentities/hourrate.entity';

export const HourRateProviders = [
  {
    provide: 'HourRateRepositoryToken',
    useFactory: (connection: Connection):Repository<HourRate> => connection.getRepository(HourRate),
    inject: ['APPCONNECTION'],
  },
];
