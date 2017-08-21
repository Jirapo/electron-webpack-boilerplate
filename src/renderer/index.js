import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const AppRoot = () => <h1>hello world</h1>;

ReactDOM.render(<AppRoot />, document.getElementById('root'));
