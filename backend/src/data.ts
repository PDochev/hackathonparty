import User from './interfaces/user'
import Task from './interfaces/task'
import UserTaskProgress from './interfaces/UserTaskProgress'
import UserSubtaskProgress from './interfaces/userSubtaskProgress'

export const users: User[] = [
  {
    userId: '1',
    name: 'John Doe',
    level: 'user',
    created_at: new Date('2022-01-01T10:00:00Z'),
    updated_at: new Date('2022-01-01T10:00:00Z'),
  },
]

export const tasks: Task[] = [
  {
    taskId: '1',         
    title: 'This is the title of the first task',             
    created_at: new Date('2022-01-01T10:00:00Z'),            
    updated_at: new Date('2022-01-01T10:00:00Z'),
    subtasks: [
      {
        subtaskId: '1',
        title: 'This is the first subtask',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '2',
        title: 'This is the second subtask',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      }
    ]     
  }, 
  {
    taskId: '2',         
    title: 'This is the title of the second task',             
    created_at: new Date('2022-01-01T10:00:00Z'),            
    updated_at: new Date('2022-01-01T10:00:00Z'),
    subtasks: [
      {
        subtaskId: '3',
        title: 'This is the third subtask',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '4',
        title: 'This is the fourth subtask',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      }
    ]     
  }, 
]

export const userTaskProgress: UserTaskProgress[] = [
  {
    userId: '1',
    taskId: '1',
    isCompleted: true,
  },
  {
    userId: '1',
    taskId: '2',
    isCompleted: false,
  }
]

export const userSubstaskProgress: UserSubtaskProgress[] = [
  {
    userId: '1',
    subtaskId: '1',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '2',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '3',
    isCompleted: true,
  },
  {
    userId: '1',
    subtaskId: '4',
    isCompleted: false
  }
]