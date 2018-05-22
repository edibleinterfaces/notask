import Task from './Task';

export default function Tasklist({ title='New Task List', tasks=[] } = {}) {
    return { title, tasks, isNew: true };
}
