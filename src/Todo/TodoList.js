import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ data }){
    return(
        <ul className='taskList'>
            {data.map((el, key) => {
               return (
                   <TodoItem el={el} key={key} />
                )
           })}
        </ul>
    )
}





export default TodoList;
