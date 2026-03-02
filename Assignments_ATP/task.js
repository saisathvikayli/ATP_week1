
    //    ii. task.js - Task operations
    //                 // TODO: Import validator functions
       import {validateTitle,validatePriority,validateDueDate} from './validation.js';
                    
            const tasks = [];
                    
                    // 1. Add new task
 export function addTask(title, priority, dueDate) {

                     if(!validateTitle() || !validatePriority() || !validateDueDate())
                     {
                        return 'Invalid'
                     }
                    else
                     {
                       tasks.push(title,priority,dueDate)
                    }
       }
                    
                    // // 2. Get all tasks
export function getAllTasks() {
                     console.log(tasks)
                     }
                    
                    // // // 3. Mark task as complete
                    // function completeTask(taskId) {
                    // //   // Find task and mark as complete
                    // return 'completed'
                    //  }