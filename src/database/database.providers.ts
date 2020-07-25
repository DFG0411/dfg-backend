import { createConnection, Connection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'MSSQLCONNECTION',
    useFactory: async (): Promise<Connection> =>
      await createConnection({
        type: 'mssql',
        host: '10.151.80.151',
        port: 1433,
        username: 'it08',
        password: 'G1971g',
        domain: 'dfg.com.cn',
        database: 'UFDATA_800_2017',
        entities: [__dirname + '/../../**/*.entity.js'],
        synchronize: false,
        logging: [/*'query',*/ 'error'],
        options: { tdsVersion: '7_1' ,encrypt:false,enableArithAbort:true,},
      }),
  },
  {
    provide: 'PGCONNECTION',
    useFactory: async (): Promise<Connection> =>
      await createConnection({
        type: 'postgres',
        host: 'host.docker.internal',
        port: 5432,
        username: 'root',
        password: 'G1971g',
        // domain: 'dfg.com.cn',
        database: 'DFGPG',
        entities: [__dirname + '/../../**/*.entity.js'],
        synchronize: true,
        logging: [/*'query',*/ 'error'],
        // options: { tdsVersion: '7_1' ,encrypt:false,enableArithAbort:true,},
      }),
  },
];
