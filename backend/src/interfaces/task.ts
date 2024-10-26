import Subtask from "./subtask";

export default interface Task {
  task_id: string;             
  title: string;               
  description?: string;        
  created_at: Date;            
  updated_at: Date;
  completed_by: string[]
  subtasks: Subtask[]            
}