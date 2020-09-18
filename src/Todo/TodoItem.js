import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Context from '../context';

function TodoItem({ todo, i, onChange }){
    const {removeTodo} = useContext(Context);
    const cls = [];
    
    if (todo.completed){
        cls.push('done');
    }


    return (
        <li className='listItem'>
            <span className={cls.join(' ')}>
                <input type='checkbox' checked={todo.completed} className='input' onChange={() => onChange(todo.id)} />
                {todo.title}
                &nbsp;
                {i + 1}
            </span>
            <Button variant="outline-danger" onClick={removeTodo.bind(null, todo.id)}>&times;</Button>{' '}
        </li>
    )
}



TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}




export default TodoItem;