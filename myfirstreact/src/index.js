import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import First from './First'
import App from './App';
import reportWebVitals from './reportWebVitals';

const element =
	<React.StrictMode>
		<App />
		<First firstprop="0" />
	</React.StrictMode>

ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
