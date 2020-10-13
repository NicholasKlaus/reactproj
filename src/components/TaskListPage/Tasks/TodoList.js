import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ data, onToggle, removeTask }){
    return(
        <ul className='task-list'>
            {data.map((el, key) => {
               return (
                   <TodoItem el={el} key={key} onChange={onToggle} removeTodo={removeTask} />
                )
           })}
        </ul>
    )
}





export default TodoList;
