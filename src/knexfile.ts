import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg', // PostgreSQL client
    connection: {
      host: 'database-2.crq6yqcualdr.ap-south-1.rds.amazonaws.com',
      user: 'postgres',
      password: 'postgres12345',
      database: 'kwickbill',
    },
    migrations: {
      directory: './migrations', // Path to migration files
    },
    seeds: {
      directory: './seeds', // Path to seed files (optional)
    },
  },
};

export default config;