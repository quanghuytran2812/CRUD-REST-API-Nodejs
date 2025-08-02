require('dotenv').config();
const sequelize = require('./configs/dbconn');
const app = require('./app');

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`-> Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('-> Unable to connect to the database:', err);
    });