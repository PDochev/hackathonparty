const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hackathon', 'hackathon', 'hackathon', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;