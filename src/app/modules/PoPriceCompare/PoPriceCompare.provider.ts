import { Connection } from 'typeorm';
import { PoPriceCompare } from 'src/app/entities/PoPriceCompare.entity';

export const PoPriceCompareProviders = [
  {
    provide: 'PoPriceCompareToken',
    useFactory: (connection: Connection) => connection.getRepository(PoPriceCompare),
    inject: ['APPCONNECTION'],
  },
];
