console.log('App.js is running!');

// JSX - JavaScript XML - manual binding

// the attribute class is a reserved keyword hence we use className. 
// Refer React DOM elements https://reactjs.org/docs/dom-elements.html to get a run down of all supported HTML attributes.
// See the Reset method handled in line

let count=0;
const my_id='myidhere';
const addOne = () => {
    count++;
    console.log("Add One",count);
    renderCountApp();
}

const minusOne = () => {
    count--;
    console.log("Minus One",count);
    renderCountApp();
}

var appRoot = document.getElementById('app');

const renderCountApp = () => {
    var template = (
        <div>
           <h1>Count :  {count}</h1> 
           <button id={my_id} className='button' onClick={addOne}>++</button>
           <button id={my_id} className='button' onClick={minusOne}>--</button> 
        </div>  
     );

     ReactDOM.render(template, appRoot);
}

renderCountApp();


