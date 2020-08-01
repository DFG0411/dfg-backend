// import { Config, IEnvironmentConfig } from './config/config';

const env = process.env.NODE_ENV || 'development';

// export const SERVER_CONFIG: IEnvironmentConfig = Config[env];

export const DB_CONNECTION_TOKEN = 'DbConnectionToken';
export const MSSQL_CONNECTION_TOKEN = 'APPCONNECTIONToken';
export const SERVER_CONFIG_TOKEN = 'ServerConfigToken';
export const USER_MODEL_TOKEN = 'UserModelToken';
export const USER_MODEL_TOKEN_MSSQL = 'UserModelTokenMSSQL';
export const MESSAGES = {
  UNAUTHORIZED_EMAIL_IN_USE: 'The email already exists',
  UNAUTHORIZED_USER_IN_USE: 'The user already exists',
  UNAUTHORIZED_INVALID_PASSWORD: 'Invalid password',
  UNAUTHORIZED_INVALID_EMAIL: 'The email does not exist',
  UNAUTHORIZED_INVALID_USER: 'The user does not exist',
  UNAUTHORIZED_UNRECOGNIZED_BEARER: 'Unrecognized bearer of the token',
};
