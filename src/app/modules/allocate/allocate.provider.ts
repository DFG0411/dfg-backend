import { Connection } from 'typeorm';
import { AllocateEntity } from 'src/app/entities/allocate.entity';

export const AllocateProviders = [
  {
    provide: 'AllocateRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(AllocateEntity),
    inject: ['APPCONNECTION'],
  },
];
