import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import './index.css';

const component = <App columns={7} rows={6} />

ReactDOM.render(component, document.getElementById('root'));