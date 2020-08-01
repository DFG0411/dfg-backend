import {Session} from '../adminentities/session.entity';
import { Connection, Repository } from 'typeorm';

export const sessionProviders = [
  {
    provide: 'SESSION_REPOSITORY',
    useFactory: (connection: Connection) :Repository<Session>=>  connection.getRepository(Session),
    inject: ['ADMCONNECTION'],  },
];
