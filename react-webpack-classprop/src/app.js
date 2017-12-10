import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';


console.log('App.js is running!');

// React - export and import individual React components

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



// To illustrate the syntax for class-properties

class OldSyntax{
    constructor(){
        this.name='Mike';
        this.getGreeting = this.getGreeting.bind(this); //3. to correct this binding.
    }
    getGreeting(){
        return `Hi. My Name is ${ this.name }.`;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting());
// 1. lets pull this in its own variable and call the function
const getGreeting = oldSyntax.getGreeting();
console.log(getGreeting); // 2. this will break unless we call the bind method in step3 in constructor



class NewSyntax{
   name='Jen';
   // step4. In the new syntax we will configure arrow function variable are in class scope
   getGreeting = () => {
    return `Hi. My Name is ${ this.name }.`;
   }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);

const getGreeting1 = newSyntax.getGreeting();// step4 . does not break
console.log(getGreeting1);
