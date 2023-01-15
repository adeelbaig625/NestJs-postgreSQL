import { DataSource, DataSourceOptions } from 'typeorm';

import { appEnv } from '../helpers/env.helper';
import { config } from 'dotenv';

config();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: appEnv('DB_HOST', 'localhost'),
  port: appEnv('DB_PORT', 3306),
  username: appEnv('DB_POSTGRES_USER', 'root'),
  password: appEnv('DB_POSTGRES_PASS', ''),
  database: appEnv('DB_POSTGRES_DB_NAME', ''),
  entities: ['dist/**/*.entity.{js,ts}'],
  synchronize: false,
  migrations: ['dist/migrations/*.js'],
  logging: 'all',
};

const dataSource = new DataSource(dataSourceOptions);

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
export default dataSource;
