import React, {useState} from 'react';
import TodoList from './Todo/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Todo/AddTodo';

function App() {
  const [_arr, setArr] = useState(
    [
      {
        id: 1,
        value: "Play World of Tanks with friends",
        completed: false,
      },
      {
        id: 2,
        value: "Go to the gas station to refuel the car",
        completed: false,
      },
      {
        id: 3,
        value: "Finish reading the book",
        completed: false,
      },
    ]
  );

 
    function addTodo(value){
      setArr(_arr.concat([{
        id: Date.now,
        value,
        completed: false,
      }]))
    }

  return (
      <div className="app">
        <header className='header'>
          <p className='header_title'>Todo App</p>
        </header>

        <div className='container'>
          <AddTodo onCreate={addTodo} />
          <TodoList data={_arr}/>
        </div>
      </div>
  );
}

export default App;
