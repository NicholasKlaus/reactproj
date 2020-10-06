import React, {useState, useEffect} from 'react';
import TodoList from './Todo/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from './Todo/AddTodo';


function App() {
  let [_arr, setArr] = useState(
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
  
  useEffect(() => {
    const _data = localStorage.getItem('_data') ? JSON.parse(localStorage.getItem('_data')) : [];
    setArr(_data);
    console.log("_data is", _data);
  }, []);

  useEffect( () => {
    localStorage.setItem('_data', JSON.stringify(_arr));
  }, [_arr]);

  return (
    <div className="app">
      <header className='header'>
        <p className='header_title'>Todo App</p>
      </header>

      <div className='container'>
        <AddTodo onCreate={addTodo} />

        <TodoList data={_arr}  onToggle={toggleTodo} removeTask={del} />
      </div>
    </div>
  );
    
  function addTodo(value) {
    setArr([..._arr, value]);
    
  }
  
    
  function toggleTodo(id) {
    setArr(
      _arr.map(el => {
        if (el.id === id) {
         el.completed = !el.completed;
        }
        return el;
      
      })
    );
  }

  function del(id) {
    setArr(_arr.filter(el => el.id !== id));
  }
}

export default App;
