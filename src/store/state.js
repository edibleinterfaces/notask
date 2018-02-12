import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import testData from './testData';

export default {
    tasklists: testData.tasklists,
    //tasklists: [ 
        //Tasklist({ tasks: [ Task() ] }) 
    //],
    auth: {
        signedIntoGoogle: false
    },
    online: navigator.onLine
};
