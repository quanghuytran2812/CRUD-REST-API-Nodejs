require('dotenv').config();

module.exports = {
  development: {
        username: process.env.DB_USER || 'localhost',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'database_development',
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'postgres',
        logging: false,
        timezone: '+07:00'
    },
    test: {
        username: process.env.DB_USER || 'localhost',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'database_test',
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'postgres',
    },
    production: {
        username: process.env.DB_USER || 'localhost',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'database_production',
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'postgres',
        logging: false,
        timezone: '+07:00',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // This is important for self-signed certificates
            }
        }
    }
}