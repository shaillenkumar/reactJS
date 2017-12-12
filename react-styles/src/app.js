import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css'


console.log('App.js is running!');

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
