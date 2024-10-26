import express from 'express'
import {users, userTaskProgress, badges, tasks} from './data'
import {Simulate} from "react-dom/test-utils";
import progress = Simulate.progress;

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

app.get('/user/badges/:user_id', (req: any, res: any) => {
  const userId = req.params.user_id;
  const completedTasksIds = userTaskProgress
      .filter( progress => progress.userId === userId && progress.isCompleted)
      .map(progress => progress.taskId);

  const earnedBadges = badges.filter(badge => completedTasksIds.includes(badge.taskId));

  if (earnedBadges) {
    console.log(earnedBadges)
    return res.status(200).json(earnedBadges);
  }

  return res.status(404).json({ message: 'No badges found' });
});

app.get('/badge/task/:badge_id', (req: any, res: any) => {
  const badgeId = req.params.badge_id;
  const badge = badges.find(badge => badge.badgeId == badgeId);

  if (!badge){
    return res.status(404).json({ message: 'No badge with given id found' });
  }

  const associatedTask = tasks.find(task => task.taskId === badge.taskId);

  if (associatedTask) {
    console.log(associatedTask)
    return res.status(200).json(associatedTask);
  }

  return res.status(404).json({ message: 'No task found for the associated badge' });
});

app.listen(() => {
  console.log(`Server running on port ${port}`);
});
