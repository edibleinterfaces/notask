import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

export default {
    appearance: { 
        font: { 
            selected: '16px', 
            options: ['16px', '18px', '20px', '24px'] 
        } 
    }, 
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
};

