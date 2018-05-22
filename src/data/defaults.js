import { TasklistDefault } from '../models/Tasklist';

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
    tasklists: [ TasklistDefault() ]
};
