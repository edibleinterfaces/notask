export default function Task({ text='New Task', details='Test Details' } = {}){

    return {
        text, 
        details, 
        complete: false
    };

};
