export default function Tasklist({ title, tasks=[]}) {

    return {

        title: title || 'New Task List',
        tasks: tasks

    };

};
