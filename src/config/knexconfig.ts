import { knex } from "knex";

export const db = knex({
  client: "pg",
  connection: {
    host: "database-2.crq6yqcualdr.ap-south-1.rds.amazonaws.com", // Update with your DB host
    user: "postgres", // Update with your DB username
    password: "postgres12345", // Update with your DB password
    database: "kwickbill_dev", // Update with your DB name
  },
  migrations: {
    directory: "./migrations", // Directory for migration files
  },
  seeds: {
    directory: "./seeds", // Directory for seed files
  }, 
});
