import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

function makeDefaultTasklists() { 

    return [

        Tasklist({ 
            isNew: true,
            title: '🛒', 
            tasks: [
                Task({
                    text: '💻',
                    complete: false,
                    details: '',
                    reminders: []

                }),
                Task({
                    text: '👖',
                    complete: false,
                    details: '',
                    reminders: []
                }),
                Task({
                    text: '🎒',
                    complete: false,
                    details: '',
                    reminders: []
                })
            ],
        }),

        Tasklist({ 
            title: '🎹', 
            isNew: true,
            tasks: [
                Task({
                    text: "Beethoven's 7th",
                    complete: false,
                    details: '',
                    reminders: []

                }),
                Task({
                    text: 'Circle of Fifths',
                    complete: false,
                    details: 'C Dm  Em  F   G   Am',
                    reminders: []
                }),
                Task({
                    text: '🎵  reading (20 min)',
                    complete: false,
                    details: '',
                    reminders: []
                })
            ],
        }), 
        Tasklist({ 
            title: '📚', 
            isNew: true,
            tasks: [
                Task({
                    text: "https://en.wikipedia.org/wiki/Blockchain",
                    complete: false,
                    details: '',
                    reminders: []

                }),
                Task({
                    text: 'Circle of Fifths',
                    complete: false,
                    details: 'C Dm  Em  F   G   Am',
                    reminders: []
                }),
                Task({
                    text: '🎵  reading (20 min)',
                    complete: false,
                    details: '',
                    reminders: []
                })
            ],
        })
    ]

};

//
export default {
    appearance: { 
        font: { 
            selected: '14px', 
            options: ['12px', '14px', '16px', '18px', '24px'] 
        },
        theme: {
            selected: 'icecream',
            options: ['icecream', 'grayscale'],
        },
    },
    cloudSync: { signedIntoDrive: false },
    export: { format: 'plaintext' },
    online: false,
    tasklists: makeDefaultTasklists()
};
