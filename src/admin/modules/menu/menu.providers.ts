// import { Database } from 'arangojs';
import {Connection, Repository} from 'typeorm';
import {Menu} from '../../entities/menu.entity';

export const MenuProviders = [
  {
    provide: 'MENU_MODEL_TOKEN',
    inject: ['ADMCONNECTION'],
    useFactory: (connection: Connection) :Repository<Menu>=>  connection.getRepository(Menu),

  },
  // {
  //   provide: USER_MODEL_TOKEN,
  //   useFactory: (db: Database) =>  db.collection('users'),
  //   inject: [DB_CONNECTION_TOKEN],
  // },
];
