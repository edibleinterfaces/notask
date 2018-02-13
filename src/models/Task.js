export default function Task({ text='New Task', details='Test Details', reminder=null } = {}){

    return {
        text, 
        details, 
        complete: false,
        reminder
    };

};
