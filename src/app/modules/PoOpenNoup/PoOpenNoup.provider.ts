import { Connection } from 'typeorm';
import { PoOpenNoup } from 'src/app/entities/PoOpenNoup.entity';

export const PoOpenNoupProviders = [
  {
    provide: 'PoOpenNoupToken',
    useFactory: (connection: Connection) => connection.getRepository(PoOpenNoup),
    inject: ['APPCONNECTION'],
  },
];
