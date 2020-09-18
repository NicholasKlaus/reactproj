import React from 'react';
import { Button } from 'react-bootstrap';

function TodoItem() {
    return (
        <li className='listItem'>
            <input type='checkbox' className='input'/>

            <Button variant="outline-danger">&times;</Button>{' '}
        </li>
    )
}

export default TodoItem;
