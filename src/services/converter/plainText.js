const plainText = function(tasklists) {
     
    return tasklists.map(function(tasklist) {

        var title = tasklist.title.toUpperCase();
        var tasks = tasklist.tasks.map(function(task) {
            return '    ' + task.text; 
        });

        return [ title ].concat(tasks).join('\n') + '\n';
    })
    .join('\n');

};

export default plainText;
