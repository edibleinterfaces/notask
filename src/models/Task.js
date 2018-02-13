export default function Task({ text='New Task', details='Test Details', reminders=[] } = {}){

    return {
        text, 
        details, 
        complete: false,
        reminders
    };

};
