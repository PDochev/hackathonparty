import Subtask from "./subtask";

export default interface Task {
  taskId: string;             
  title: string;               
  created_at: Date;            
  updated_at: Date;
  subtasks: Subtask[]            
}