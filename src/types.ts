// export interface Task {
//   id: string;
//   title: string;
//   subtasks: SubTask[];
// }

// export interface SubTask {
//   id: string;
//   title: string;
//   isCompleted: boolean;
// }

export interface User {
  userId: string;
  name: string;
  level: string;
  created_at: Date;
  updated_at: Date;
}

export interface Task {
  taskId: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  subtasks: Subtask[];
}

export interface Subtask {
  subtaskId: string;
  title: string;
  created_at: Date;
  updated_at: Date;
  isCompleted: boolean;
}

export interface Badge {
  id: string;
  name: string;
  earnedDate: string;
}
