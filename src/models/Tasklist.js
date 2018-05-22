import Task from './Task';

export function Tasklist({ title='New Task List', tasks=[] } = {}) {
    return { title, tasks, isNew: true };
}

export function TasklistDefault() {

    return { 
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
        isNew: true
    };

};
