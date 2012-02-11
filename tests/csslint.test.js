//include
var fs = require('fs'),
    CSSLint = require("../");

var result, messages, output, shortFilename;
fs.readFile('./src/sample.css', 'utf8', function(err, data) {
    /*
    * Basic usage
    * First argument is the CSS text.
    * Second argument is the options object. Name is the ID of the rule (see wiki) set to 
    * either 1 for a warning or 2 for an error.
    */
    result = CSSLint.verify(data, { "compatible-vendor-prefixes": 1 });
    messages = result.messages;

    /*
     * Each object in the messages array has:
     * - message - the actual warning text
     * - evidence - the line of code that triggered the message
     * - line - the line number 
     * - col - the column number
     * - type - the type of message ("error" or "warning")
     */
    messages.forEach(function (message, i) {
        output = output + "\n\n" + shortFilename;
        if (message.rollup) {
            output += "\n" + (i+1) + ": " + message.type;
            output += "\n" + message.message;
        } else {
            output += "\n" + (i+1) + ": " + message.type + " at line " + message.line + ", col " + message.col;
            output += "\n" + message.message;
            output += "\n" + message.evidence;
        }
        console.log(output);
    });

});


