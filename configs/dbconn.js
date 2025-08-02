const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // Disable logging; default: console.log
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('-> Connection to the database has been established successfully.');
    } catch (error) {
        console.error('-> Unable to connect to the database:', error);
    }
};

testConnection();

module.exports = sequelize;