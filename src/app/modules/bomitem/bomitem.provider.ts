import { Connection } from 'typeorm';
import { BomItem } from 'src/app/entities/bomitem.entity';

export const BomItemProviders = [
  {
    provide: 'BomItemRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(BomItem),
    inject: ['APPCONNECTION'],
  },
];
