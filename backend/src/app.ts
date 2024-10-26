import express from 'express'
import sequelize from './db'

const app = express()
const port = 8000;

app.use(express.json()); 

app.get('/', (req: any, res: any) => {
  res.send('Welcome to the Express & Sequelize App!');
});

sequelize
  .sync({ alter: true }) 
  .then(() => {
    console.log('Database synchronized');
    app.listen(() => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error : any) => {
    console.error('Error syncing the database:', error);
  });

