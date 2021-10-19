import './index.css';
import ReactDOM from 'react-dom';
//import React from 'react';
import { App } from './components';

const component = <App columns={7} rows={6} />

ReactDOM.render(component, document.getElementById('root'));