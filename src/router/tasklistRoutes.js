import ListManager from '../components/tasklists/ListManager';
import Tasklist from '../components/tasklists/Tasklist';
import Task from '../components/tasklists/Task';
import TaskDetails from '../components/tasklists/TaskDetails';

export default {
    // all tasklists
    path: '/tasklists',
    name: 'tasklistManager',
    component: ListManager,
    children: [
        {
            // single tasklist
            path: '/tasklist/:listId',
            name: 'tasklist',
            component: Tasklist,
            children: [
                {
                    // single task
                    path: '/tasklist/:listId/task/:taskId',
                    name: 'task',
                    component: Task, 
                    children: [
                        {
                            // task details
                            path: '/tasklist/:listId/task/:taskId/details',
                            name: 'taskDetails',
                            component: TaskDetails 
                        }
                    ]
                }
            ]
        }
    ]
};
