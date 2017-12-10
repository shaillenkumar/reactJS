import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


console.log('App.js is running!');

const Layout = (props) => {
  return (<div>
            <p>header</p>
                {props.contents}
            <p>footer</p>
        </div>);
}


const template = (<div> <h1>Title </h1> <p> Here are the contents </p> </div>);

ReactDOM.render(<Layout contents={template}/>, document.getElementById('app'));
