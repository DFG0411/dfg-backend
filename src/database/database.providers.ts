import { createConnection, Connection } from 'typeorm';
import { databaseConfig } from '../common/config/databaseConfig';
import { IDatabaseConfig } from '../common/config/interfaces/IDatabase';

import { SqlClient } from 'msnodesqlv8';
// import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlDriver: SqlClient = require('msnodesqlv8');

export const databaseProviders = [
  {
    provide: 'APPCONNECTION',
    useFactory: async (): Promise<Connection> =>
      await createConnection({
        type: 'mssql',
        name: 'AppConnection',
        host: '10.151.80.151',
        port: 1433,
        username: 'it18',
        password: '11',
        domain: 'dfg.com.cn',
        database: 'UFDATA_800_2017',
        entities: ['dist/app/entities/**/*.entity.js'],
        synchronize: false,
        logging: [/*'query',*/ 'error'],
        connectionTimeout:60000,
        extra: {
          driver: sqlDriver,
          options: {
            trustedConnection: true,
            encrypt: false,
            enableArithAbort: true,
            timeout: 60000,
          },
        },
        // options: { tdsVersion: '7_1' ,encrypt:false,enableArithAbort:true,},
      }),
  },
  {
    provide: 'ADMCONNECTION',
    useFactory: async (): Promise<Connection> => {
      const config: IDatabaseConfig = databaseConfig;
      // console.log('env:' +JSON.stringify (config));
      return await createConnection({
        type: 'postgres',
        ...config,
        entities: ['dist/admin/entities/**/*.entity.js'],
      });
    },
  },
];
