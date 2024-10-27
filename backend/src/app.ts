import express, { Express, Request, Response } from "express";
import { users, tasks, userTaskProgress, userSubstaskProgress, badges } from './data'
import cors from 'cors';

const app: Express = express()
const port = 3000;


app.use(express.json());


const corsOptions = {
  origin: [
    'http://localhost:5173',
  ],
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
};

app.use(cors(corsOptions));

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
app.get('/users/:userId/incomplete-tasks', (req, res) => {
  const userId = req.params.userId;

  const incompleteTasks = tasks
    .filter(task => {
      const taskProgress = userTaskProgress.find(
        progress => progress.userId === userId && progress.taskId === task.taskId
      );
      return taskProgress && !taskProgress.isCompleted;
    })
    .map(task => {
      const updatedSubtasks = task.subtasks.map(subtask => {
        const subtaskProgress = userSubstaskProgress.find(
          progress => progress.userId === userId && progress.subtaskId === subtask.subtaskId
        );
        return {
          ...subtask,
          isCompleted: subtaskProgress ? subtaskProgress.isCompleted : false,
        };
      });
      return { ...task, subtasks: updatedSubtasks };
    });

  res.status(200).json(incompleteTasks);
});

//get completed tasks
app.get('/users/:userId/complete-tasks', (req, res) => {
  const userId = req.params.userId;
  const completedTasks = tasks
    .filter(task => {
      const taskProgress = userTaskProgress.find(
        progress => progress.userId === userId && progress.taskId === task.taskId
      );
      return taskProgress && taskProgress.isCompleted;
    });
    res.status(200).json(completedTasks)
})

// get_user_badges
app.get('/user/badges/:user_id', (req: any, res: any) => {
  const userId = req.params.user_id;
  const completedTasksIds = userTaskProgress
    .filter(progress => progress.userId === userId && progress.isCompleted)
    .map(progress => progress.taskId);

  const earnedBadges = badges.filter(badge => completedTasksIds.includes(badge.taskId));

  if (earnedBadges) {
    console.log(earnedBadges)
    return res.status(200).json(earnedBadges);
  }

  return res.status(404).json({ message: 'No badges found' });
});


// get_badge_task
app.get('/badge/task/:badge_id', (req: any, res: any) => {
  const badgeId = req.params.badge_id;
  const badge = badges.find(badge => badge.badgeId == badgeId);

  if (!badge) {
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