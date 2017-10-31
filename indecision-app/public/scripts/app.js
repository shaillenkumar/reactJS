'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML - manual binding

// the attribute class is a reserved keyword hence we use className. 
// Refer React DOM elements https://reactjs.org/docs/dom-elements.html to get a run down of all supported HTML attributes.
// See the Reset method handled in line

var count = 0;
var my_id = 'myidhere';
var addOne = function addOne() {
    count++;
    console.log("Add One", count);
    renderCountApp();
};

var minusOne = function minusOne() {
    count--;
    console.log("Minus One", count);
    renderCountApp();
};

var appRoot = document.getElementById('app');

var renderCountApp = function renderCountApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count :  ',
            count
        ),
        React.createElement(
            'button',
            { id: my_id, className: 'button', onClick: addOne },
            '++'
        ),
        React.createElement(
            'button',
            { id: my_id, className: 'button', onClick: minusOne },
            '--'
        )
    );

    ReactDOM.render(template, appRoot);
};

renderCountApp();
