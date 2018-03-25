import markdown from './markdown';
import plainText from './plainText';

/*
 * Text and Markdown converters break data up into an array of lines
 * so that can be passed into a file object.
 */

const Converter = function() {

    const converters = {
        json: (data) =>  JSON.stringify(data, undefined, 4),
        plaintext: (data) => plainText(data), 
        markdown: (data) => markdown(data)
    };

    return {
        convert: (data, format) => converters[format](data)
    };
};

export default new Converter();
