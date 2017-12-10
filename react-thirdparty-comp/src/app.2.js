import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


console.log('App.js is running!');

const Layout = (props) => {
  return (<div>
            <p>header</p>
                {props.children} 
            <p>footer</p>
        </div>);
}

// The JSX expression passed from the <Layout></Layout> can be accessed in the component as props.children
ReactDOM.render(<Layout> <div><h1>Title</h1> <p>Here are the contents</p></div> </Layout>, document.getElementById('app'));
