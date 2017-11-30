// there are 2 things you need in a webpack
// entry point where does your application kick off which is - app.js in this case
// out - where to put the output file the one big js file everything our app needs the bundle.js file 
//for documentation and concepts behind webpack visit the  http://webpack.js.org website
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


