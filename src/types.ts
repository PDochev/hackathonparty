export interface Task {
  id: string;
  title: string;
  subtasks: SubTask[];
}

export interface SubTask {
  id: string;
  title: string;
  isCompleted: boolean;
}
