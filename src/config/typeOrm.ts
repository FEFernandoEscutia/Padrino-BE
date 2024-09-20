import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { envs } from './envsconfig';


const config = {
  type: 'postgres',
  database: `${envs.dbName}`,
  host: `${envs.host}`,
  port: `${envs.dbPort}` as unknown as number,
  username: `${envs.dbUsername}`,
  password: `${envs.dbPassword}`,
  autoLoadEntities: true,
  dropSchema: false,
  synchronize: true,
  logging: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
};
export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
