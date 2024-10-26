import express from 'express'
import { users} from './data'

const app = express()
const port = 4500;

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Welcome to the hackathon app!');
});

  app.get('/users/:id', (req: any, res: any) => {
    const userId = req.params.id;
    const user = users.find(u => u.user_id === userId);
  
    if (user) {
      console.log(user)
      return res.status(200).json(user); 
    }
  
    return res.status(404).json({ message: 'User not found' }); 
  });

  app.listen(() => {
    console.log(`Server running on port ${port}`);
  });
