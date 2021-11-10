import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddTodoComponent from './components/addTodo.component'
import ViewTodoComponent from './components/viewTodo.component'

function App() {
  return (
    <div className="App container mt-5">
      <AddTodoComponent />
	  <ViewTodoComponent />
    </div>
  );
}

export default App;
