import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

export default {
    tasklists: [
        Tasklist(
            { 
                title: 'VSTS Tasks',
                tasks: [ 
                    Task({ 
                        text:'Closed Captioning', 
                        details: 'Do this by 6.30'
                    }), 
                    Task({ 
                        text:'Video Bugs on IE', 
                        details: 'loader stops at phase 2 on IE.'
                    }), 
                    Task({ 
                        text:'Endpoint for Video Delete', 
                        details: ''
                    })
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
