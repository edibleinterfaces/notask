import markdown from './markdown';
import plainText from './plainText';

/*
 * Text and Markdown converters break data up into an array of lines
 * so that can be passed into a file object.
 */

const Converter = function() {

    const converters = {

        json: function(data) {
            return JSON.stringify(data, undefined, 4);
        },

        txt: function(data) {
           return plainText(data); 
        },

        markdown: function(data) {
            return markdown(data);
        }

    };


    return {
        convert: function(data, format) {
            return converters[format](data);
        }
    };
};

export default new Converter();
