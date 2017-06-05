export default function Task(text) {

    return {
        text: text || 'New Task',
        complete: false,
        details: ''
    };

};
