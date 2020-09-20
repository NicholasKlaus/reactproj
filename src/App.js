import React from 'react';
import TodoList from './Todo/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Todo/AddTodo';

function App() {
  const _arr =[
    {
      id: 1,
      value: "Play World of Tanks with friends",
      complited: false,
    },
    {
      id: 2,
      value: "Go to the gas station to refuel the car",
      complited: false,
    },
    {
      id: 3,
      value: "Finish reading the book",
      complited: false,
    },
  ]


  return (
      <div className="app">
        <header className='header'>
          <p className='header_title'>Todo App</p>
        </header>

        <div className='container'>
          <AddTodo/>
          <TodoList _arr={_arr}/>
        </div>
      </div>
  );
}

export default App;
