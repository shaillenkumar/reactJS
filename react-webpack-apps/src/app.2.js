console.log('app.js is running');

import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
// var React = require('react');   // require is ES5.js syntax
// Refer https://reactjs.org/docs/installation.html for the react install


// import from the npm module validator not there is relative path then it looks for import in node_modules folder
// Check the npm validator module documentation to check named export or default export.
console.log(validator.isEmail('test@gmail.com'));

const template = "This is JSX from webpack!"
ReactDOM.render(template,document.getElementById('app'));
