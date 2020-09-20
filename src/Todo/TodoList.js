import React from 'react';
import TodoItem from './TodoItem';

function TodoList(){
    return(
        <ul className='taskList'>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </ul>
    )
}





export default TodoList;
