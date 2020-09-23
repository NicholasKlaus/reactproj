import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ data }, {del}){
    return(
        <ul className='task-list'>
            {data.map((el, key) => {
               return (
                   <TodoItem el={el} key={key} del={del} />
                )
           })}
        </ul>
    )
}





export default TodoList;
