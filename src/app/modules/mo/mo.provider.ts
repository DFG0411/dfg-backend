import { Connection, Repository } from 'typeorm';
import { MoEntity } from '../../entities/mo.entity';

export const MoProviders = [
  {
    provide: 'MoRepositoryToken',
    inject: ['APPCONNECTION'],
    useFactory: (connection: Connection):Repository<MoEntity> => connection.getRepository(MoEntity),

  },
];
