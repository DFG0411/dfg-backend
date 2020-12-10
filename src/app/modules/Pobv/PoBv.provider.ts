import { Connection } from 'typeorm';

import { PoBv } from 'src/app/entities/PoBv.entity';

export const PoBvProviders = [
  {
    provide: 'PoBvToken',
    useFactory: (connection: Connection) => connection.getRepository(PoBv),
    inject: ['APPCONNECTION'],
  },
];
