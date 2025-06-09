import "reflect-metadata"
import { DataSource } from 'typeorm'
import config from './src/config'

export const AppDataSource = new DataSource( {
  database: config.DB.NAME,
  entities: ['src/packages/database/models/*.ts'],
  host: config.DB.HOST,
  logging: false,
  migrations: ['src/packages/database/migrations/*.ts'],
  password: config.DB.PASSWORD,
  port: config.DB.PORT,
  synchronize: false,
  type: 'postgres',
  username: config.DB.USER,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

