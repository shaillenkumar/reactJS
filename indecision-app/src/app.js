//  {} is just import syntax not a object notation
//  The square, add , is Adult are namedexport and are refrenced inside {} 
//  The default export is refrenced outside {} as below

//import './utils.js'
// import subtract,{ square , add , isAdult} from './utils.js';  
import anything,{ square , add , isAdult} from './utils.js';  //the default export can be reffered as anyname


console.log( square(4));
console.log( add(4 , 6));
console.log( anything(14 , 4));
console.log( isAdult(20));
console.log('App.js is running!');