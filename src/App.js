import React from 'react';
import TodoList from './Todo/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './context';
import AddTodo from './Todo/AddTodo';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: "task"},
    {id: 2, completed: false, title: "task"},
    {id: 3, completed: false, title: "task"},
  ])
  

  function toggleTodo(id){
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
    
  }


  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now,
      completed: false,
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="App">
        <header className='header'>
          <p className='header_title'>Selvet & Cosmic JS App</p>
        </header>
      

        <div className='container'>
          <AddTodo onCreate={addTodo} />
          {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />) : (<p>No todo tasks!</p>)}
          
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
