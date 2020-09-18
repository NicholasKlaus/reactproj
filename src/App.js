import React from 'react';
import TodoList from './Todo/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Todo/AddTodo';

function App() {
  return (
      <div className="app">
        <header className='header'>
          <p className='header_title'>Todo App</p>
        </header>

        <div className='container'>
          <AddTodo/>
          <TodoList/>
        </div>
      </div>
  );
}

export default App;
