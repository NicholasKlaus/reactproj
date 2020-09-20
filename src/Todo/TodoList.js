import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props){
    return(
        <ul className='taskList'>
            {props._arr.map(el => {
               return (
                   <TodoItem el={el} key={el.id} />
                )
           })}
        </ul>
    )
}





export default TodoList;
