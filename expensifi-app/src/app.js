import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('App.js is running!');
ReactDOM.render(<AppRouter />, document.getElementById('app'));
