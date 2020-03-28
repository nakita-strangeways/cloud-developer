import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// Instantiate new Sequelize instance!
// export const sequelize = new Sequelize({
//   "username": config.dev.username,
//   "password": config.dev.password,
//   "database": config.dev.database,
//   "host": config.dev.host,

//   "dialect": config.dev.dialect,
//   "storage": ":memory:"
// });

export const sequelize = new Sequelize(
  "postgres://udagramnakitadev:postgres@udagramnstrange.cj6xemhpolby.us-west-1.rds.amazonaws.com/udagramnstrange"
);


