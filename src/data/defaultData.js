import Task from '../models/Task';
import Tasklist from '../models/Tasklist';
import demoData from './demoData';

export default {
    appearance: { 
        font: { 
            selected: '16px', 
            options: ['16px', '18px', '20px', '24px'] 
        },
        theme: {
            selected: 'icecream',
            options: ['icecream', 'grayscale'],
        },
    },
    export: {
        format: 'plaintext'
    },
    cloudSync: {
        signedIntoDrive: false,
    },
    online: false,
}



