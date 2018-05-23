import Task from './Task';

export default function Tasklist({ title='New Task List', tasks=[], isNew=true } = {}) {
    return { title, tasks, isNew };
}
