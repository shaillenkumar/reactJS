const path = require('path');   //add path node path module
console.log(__dirname);         //just to explore __dirname variable
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'), 
        //has to be absolute path depends on the OS. use __dirname property
        //Refer the node.js path module and join api at https://nodejs.org/api/path
        filename:'bundle.js'
    }
};