import "reflect-metadata"
import { DataSource } from 'typeorm'
import config from './config'
import { User } from './packages/database/models/user'


/**
 * AppDataSource is the main database connection for the application.
 * It is configured to connect to a PostgreSQL database using TypeORM.
 * The connection settings are loaded from the configuration file.
 */


export const AppDataSource = new DataSource({
  // database connection
  type: 'postgres',
  database: config.DB.NAME,
  host: config.DB.HOST,
  password: config.DB.PASSWORD,
  port: config.DB.PORT,
  username: config.DB.USER,

  // database settings
  logging: false,
  synchronize: false,

  // entity file path and migration file path
  entities: [User],
  migrations: ['src/packages/database/migrations/*.ts'],

  // ssl
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

