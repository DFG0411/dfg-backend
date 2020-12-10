import { Connection } from 'typeorm';
import { Tyuzan } from 'src/app/entities/Tyuzan.entity';

export const TyuzanProviders = [
  {
    provide: 'TyuzanToken',
    useFactory: (connection: Connection) => connection.getRepository(Tyuzan),
    inject: ['APPCONNECTION'],
  },
];
