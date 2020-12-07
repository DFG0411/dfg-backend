;
import { createConnection, Connection } from 'typeorm';
import { databaseConfig } from '../common/config/databaseConfig';
import { IDatabaseConfig } from '../common/config/interfaces/IDatabase';

// import { SqlClient } from 'msnodesqlv8';
import sqlDriver from 'msnodesqlv8';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'mssql',
        host: 'XXX.XXXX.XXX.XXX',
        port: 1433,
        username: 'XXX',
        password: 'XXX',
        domain: 'XXX',
        database: 'XXX',
        cache:true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
        options: { tdsVersion: '7_1' },
      }),
  },
  {
    provide: 'APPCONNECTION',
    useFactory: async (): Promise<Connection> =>
      await createConnection({
        type: 'mssql',
        name: 'AppConnection',
        host: 'XXX',
        port: 1433,
        username: 'XXX',
        password: 'XXXX',
        domain: 'XXX.com.cn',
        database: 'XXXXX',
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
