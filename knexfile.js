module.exports = {
  development: {
    client: "pg",
    connection: {
      port: "5432",
      host: "127.0.0.1",
      database: "scheduler",
      user: "postgres",
      password: "root",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_DB,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },

    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },
};
