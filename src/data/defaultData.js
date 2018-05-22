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
    tasklists: [
        Tasklist(
            { 
                title: '🛒',
                tasks: [ 
                    Task({ 
                        text:'💻',
                        details: 'Get a new computer'
                    }), 
                    Task({ 
                        text:'👖',
                        details: '2 X Levis 511'
                    }), 
                    Task({ 
                        text:'🎒',
                        details: 'New backpack for school!'
                    }), 
                ]
            }
        ) 
    ]
}



