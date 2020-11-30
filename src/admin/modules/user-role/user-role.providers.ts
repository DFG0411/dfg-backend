import {UserRole }from '../../entities/user-role.entity';
import { Connection, Repository } from 'typeorm';
// import {  MSSQL_CONNECTION_TOKEN} from '../server.constants';

export const userRoleProviders = [
  {
    provide: 'USER_ROLE_REPOSITORY',
    useFactory: (connection: Connection) :Repository<UserRole>=>  connection.getRepository(UserRole),
    inject: ['ADMCONNECTION'],},
];
