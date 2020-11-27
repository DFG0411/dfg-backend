
import { createConnection, Connection, Any } from 'typeorm';
import { databaseConfig } from '../common/config/databaseConfig';
import { IDatabaseConfig } from '../common/config/interfaces/IDatabase';


export const databaseProviders = [
  {
    provide: 'APPCONNECTION',

    useFactory: async (): Promise<Connection> =>
      await createConnection({
        type: 'mssql',
        name: 'AppConnection',

        host: '10.151.80.151',
        port: 1433,
        username: 'dev',
        password: 'G19710406g',
        // domain: 'dfg',
        database: 'UFDATA_800_2017',
        entities: ['dist/src/app/entities/**/*.entity{.ts,.js}'],
        synchronize: false,        
        logging: [/*'query',*/ 'error'],
        cache:true,
        connectionTimeout:60000,
        extra: {


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
      console.log('env:' +JSON.stringify (config));
      return await createConnection({
        type: 'postgres',
        ...config,
        entities: ['dist/src/admin/entities/**/*.entity.js'],
      });
    },
  },
];
