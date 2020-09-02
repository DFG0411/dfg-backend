import { createConnection, Connection, Any } from 'typeorm';
import { databaseConfig } from '../common/config/databaseConfig';
import { IDatabaseConfig } from '../common/config/interfaces/IDatabase';

import { SqlClient } from 'msnodesqlv8';
// import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const sqlDriver: SqlClient = require('msnodesqlv8');

// Server=localhost,1433;Database=database;User Id=username;Password=password;Encrypt=true
// Driver=msnodesqlv8;Server=(local)\INSTANCE;Database=database;UID=DOMAIN\username;PWD=password;Encrypt=true


export const databaseProviders = [
  {
    provide: 'APPCONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mssql',
        host: '10.151.80.151',
        port: 1433,
        username: 'it101',
        password: '101101',
        domain: 'dfg',
        database: 'UFDATA_800_2017',
        entities: ['dist/app/entities/**/*.entity{.ts,.js}'],
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
            options: { tdsVersion: '7_1' ,encrypt:false},
      },
    },
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
