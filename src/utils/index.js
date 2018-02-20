const createFile = function(data, options) {

    if (!data) {
        throw new Error('createFile requires an array of data items as its first argument'); 
    }

    options = options || {};

    const extension = options.extension || 'txt';
    const mimeType = options.mimeType || 'text/plain';
    const name = options.name || 'no-task-backup.' + extension; 

    return new File(data, name, { type: mimeType });
};

const moveCursorToEnd = function(el) {

    if (typeof el.selectionStart == "number") {

        el.selectionStart = el.selectionEnd = el.value.length;

    } else if (typeof el.createTextRange != "undefined") {

        var range = el.createTextRange();
        range.collapse(false);
        range.select();

    }
}

const selectText = function(element) {

    element.selectionStart = 0;
    element.selectionEnd = element.value.length;

};

const selectTextAlt = function(element) {

    element.setSelectionRange(0,9999);

};


export { 
    moveCursorToEnd, 
    selectText,
    selectTextAlt,
    createFile
};
