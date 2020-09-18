import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';




function TodoList(props){
    return(
        <ul className='taskList'>
            { props.todos.map((todo, i) => {
                return <TodoItem todo={todo} key={todo.id} i={i} onChange={props.onToggle} />
            }) }
        </ul>
    )
}



TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}





export default TodoList;