import { Connection, Repository } from 'typeorm';
import { MoEntity } from '../appentities/mo.entity';

export const MoProviders = [
  {
    provide: 'MoRepositoryToken',
    inject: ['APPCONNECTION'],
    useFactory: (connection: Connection):Repository<MoEntity> => connection.getRepository(MoEntity),

  },
];
