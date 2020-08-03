import { createConnection, Connection } from 'typeorm';
// import { UserEntity } from 'src/adminentities/user.entity';
// import { UserRoleEntity } from 'src/adminentities/user-role.entity';
// import { Session } from 'src/adminentities/session.entity';
import {SqlClient}  from 'msnodesqlv8';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlDriver: SqlClient = require("msnodesqlv8");
export const databaseProviders = [
  {
    provide: 'APPCONNECTION',
    useFactory: async (): Promise<Connection> =>
      await createConnection({
        type: 'mssql',
        name:'AppConnection',
        host: '10.151.80.151',
        port: 1433,
        username: 'it08',
        password: 'G1971g',
        domain: 'dfg.com.cn',
        database: 'UFDATA_800_2017',
        entities: [ 'dist/appentities/**/*.entity.js'],
        synchronize: false,
        logging: [/*'query',*/ 'error'],
        extra:{driver: sqlDriver,
          options: {
              trustedConnection: true,
              encrypt:false,
              enableArithAbort:true,
              timeout:30000,
          }},
        // options: { tdsVersion: '7_1' ,encrypt:false,enableArithAbort:true,},
      }),
  },
  {
    provide: 'ADMCONNECTION',
    useFactory: async (): Promise<Connection> =>
      await createConnection({
        type: 'postgres',
        name:'AdmConnection',
        host: 'host.docker.internal',
        port: 5432,
        username: 'postgres',
        password: 'G1971g',
        // domain: 'dfg.com.cn',
        database: 'DFGPG',
        entities: ['dist/adminentities/**/*.entity.js'],
        synchronize: false,
        logging: [/*'query',*/ 'error'],
        // options: { tdsVersion: '7_1' ,encrypt:false,enableArithAbort:true,},
      }),
  },
];
