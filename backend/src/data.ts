import User from './interfaces/user'
import Task from './interfaces/task'
import UserTaskProgress from './interfaces/userTaskProgress'
import UserSubtaskProgress from './interfaces/userSubtaskProgress'
import Badge from "./interfaces/badge";

export const users: User[] = [
  {
    userId: '1',
    name: 'Sam',
    level: 'newcomer',
    created_at: new Date('2022-01-01T10:00:00Z'),
    updated_at: new Date('2022-01-01T10:00:00Z'),
  },
]

export const tasks: Task[] = [
  {
    taskId: '1',         
    title: 'Get a SIM card',             
    created_at: new Date('2022-01-01T10:00:00Z'),            
    updated_at: new Date('2022-01-01T10:00:00Z'),
    subtasks: [
      {
        subtaskId: '1',
        title: 'Research mobile providers to find a plan that meets your calling and data needs',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '2',
        title: 'Visit a store or website to purchase a SIM card that fits your phone',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '3',
        title: 'Insert the SIM card into your phone and follow instructions to activate it',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '4',
        title: 'Complete the registration process if required by the provider for service setup',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
    ]     
  }, 
  {
    taskId: '2',         
    title: 'Get your National Insurance number',             
    created_at: new Date('2022-01-01T10:00:00Z'),            
    updated_at: new Date('2022-01-01T10:00:00Z'),
    subtasks: [
      {
        subtaskId: '5',
        title: 'Visit the government website to check the application process and eligibility',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '6',
        title: 'Prepare your personal details and documents for identity verification',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '7',
        title: 'Complete the application form and double-check all information provided',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '8',
        title: 'Attend any requested appointments for further identity verification if needed',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
    ]     
  }, 
  {
    taskId: '3',         
    title: 'Set up a bank account',             
    created_at: new Date('2022-01-01T10:00:00Z'),            
    updated_at: new Date('2022-01-01T10:00:00Z'),
    subtasks: [
      {
        subtaskId: '9',
        title: 'Research available bank accounts to decide which type best suits your needs',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '10',
        title: 'Prepare required documents, such as proof of ID and address, for the application',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '11',
        title: 'Visit the bank or apply online to open the account and provide necessary details',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '12',
        title: 'Review and sign the account agreement after reading the terms and conditions',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
    ]     
  }, 
  {
    taskId: '4',         
    title: 'Register with the NHS',             
    created_at: new Date('2022-01-01T10:00:00Z'),            
    updated_at: new Date('2022-01-01T10:00:00Z'),
    subtasks: [
      {
        subtaskId: '13',
        title: 'Find the nearest GP practice by using the NHS website’s search tool',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '14',
        title: 'Gather your identification documents, such as your passport or driver’s license',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '15',
        title: 'Fill out the registration form either online or at the GP’s office',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '16',
        title: 'Submit your form and ID at the GP practice reception and confirm registration',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
    ]     
  }, 
  {
    taskId: '5',         
    title: 'Register with a dentist',             
    created_at: new Date('2022-01-01T10:00:00Z'),            
    updated_at: new Date('2022-01-01T10:00:00Z'),
    subtasks: [
      {
        subtaskId: '17',
        title: 'Search for local NHS or private dental practices and review patient ratings and services',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '18',
        title: 'Confirm if the practice is accepting new patients, especially if it is an NHS dentist',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '19',
        title: 'Complete the registration form with your personal and medical details',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
      {
        subtaskId: '20',
        title: 'Submit the form and required documents in person or online, and schedule your initial check-up appointment',
        created_at: new Date('2022-01-01T10:00:00Z'), 
        updated_at: new Date('2022-01-01T10:00:00Z'),
      },
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
  },
  {
    userId: '1',
    taskId: '3',
    isCompleted: true,
  },
  {
    userId: '1',
    taskId: '4',
    isCompleted: true,
  },
  {
    userId: '1',
    taskId: '5',
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
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '5',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '6',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '7',
    isCompleted: false
  },
  {
    userId: '1',
    subtaskId: '8',
    isCompleted: false
  },
  {
    userId: '1',
    subtaskId: '9',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '10',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '11',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '12',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '13',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '14',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '15',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '16',
    isCompleted: true
  },
  {
    userId: '1',
    subtaskId: '17',
    isCompleted: false
  },
  {
    userId: '1',
    subtaskId: '18',
    isCompleted: false
  },
  {
    userId: '1',
    subtaskId: '19',
    isCompleted: false
  },
  {
    userId: '1',
    subtaskId: '20',
    isCompleted: false
  },

]

export const badges: Badge[] =
    [
      {
        badgeId: '1',
        name: "SIMply the best",
        taskId: '1',
        dateEarned: new Date('2022-01-01T10:00:00Z')
      },
      {
        badgeId: '2',
        name: "An Apple a day!",
        taskId: '4',
        dateEarned: new Date('2022-01-01T10:00:00Z')
      },
      {
        badgeId: '3',
        name: "It's Payday!",
        taskId: '3',
        dateEarned: new Date('2022-01-01T10:00:00Z')
      },
      {
        badgeId: '4',
        name: "National Insurance badge ",
        taskId: '2',
        dateEarned: new Date('2022-01-01T10:00:00Z')
      },
      {
        badgeId: '5',
        name: "Register with a dentist",
        taskId: '5',
        dateEarned: new Date('2022-01-01T10:00:00Z')
      }
    ]