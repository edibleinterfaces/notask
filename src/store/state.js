import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

export default {
    tasklists: [
        Tasklist(
            { 
                title: 'A',
                tasks: [ 
                    Task({ text:'A1.' }), 
                    Task({ text:'B1.' }), 
                    Task({ text:'C1.' }), 
                    Task({ text:'D1.' }), 
                    Task({ text:'E1.' }), 
                    Task({ text:'F1.' }) 
                ]
            }
        ), 
        Tasklist(
            { 
                title: 'B',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        ), 
        Tasklist(
            { 
                title: 'C',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        ),
        Tasklist(
            { 
                title: 'D',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        ),
        Tasklist(
            { 
                title: 'E',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        ),
        Tasklist(
            { 
                title: 'F',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        ),
        Tasklist(
            { 
                title: 'G',
                tasks: [ 
                    Task({ text:'Release Album.' }), 
                    Task({ text:'Market Album.' }) 
                ]
            }
        )

    ]
};
