import express, { Express, Request, Response } from "express";
import { users, tasks, userTaskProgress, badges} from './data'
import {Simulate} from "react-dom/test-utils";
import progress = Simulate.progress;
// import cors from 'cors';

const app: Express = express()
const port = 3000;


app.use(express.json()); 

// var whitelist = ['http://localhost:5173']

// app.use(cors({
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin!) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// }));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the hackathon app!');
});

// get_user_profile_info
  app.get('/users/:id', (req: any, res: any) => {
    const userId = req.params.id;
    const user = users.find(u => u.userId === userId);
  
    if (user) {
      console.log(user)
      return res.status(200).json(user); 
    }

    return res.status(404).json({ message: 'User not found' }); 
  });

// get_user_task_list

// app.get('/users/:userId/incomplete-tasks', (req: Request, res: Response) => {
//   const userId = req.params.userId;
//   const incompleteTasks = tasks
//     .filter(task => {
//       const taskProgress = userTaskProgress.find(
//         progress => progress.userId === userId && progress.taskId === task.taskId
//       );
//       return taskProgress && !taskProgress.isCompleted;
//     })
//     .map(task => {
//       const updatedSubtasks = task.subtasks.map(subtask => {
//         const userSubtaskProgress = updatedSubtasks.find(
//           progress => progress.userId === userId && progress.subtaskId === subtask.subtaskId
//         );
//         return {
//           ...subtask,
//           isCompleted: subtaskProgress ? subtaskProgress.isCompleted : false,
//         };
//       });
//       return { ...task, subtasks: updatedSubtasks };
//     });

//   res.json(incompleteTasks);
// });


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

app.listen(port, (err?: Error) => {
  if (err) {
    console.error(`Failed to start server: ${err}`);
  } else {
    console.log(`Server is running on http://localhost:${port}`);
  }
});