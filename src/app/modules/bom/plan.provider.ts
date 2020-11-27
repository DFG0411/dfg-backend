import { Connection, Repository } from 'typeorm';
import { BomItem } from '../../entities/bomitem.entity';

export const BomPlanProviders = [
  {
    provide: 'BomPlanRepositoryToken',
    useFactory: ( connection: Connection):Repository<BomItem> => connection.getRepository(BomItem),
    inject: ['APPCONNECTION'],
  },
];
