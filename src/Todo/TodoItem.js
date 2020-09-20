import React from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'react-bootstrap';


function TodoItem({ el }) {

    return (
        <li className='listItem'>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            { el.value }
            <Button variant="outline-danger">&times;</Button>{' '}
        </li>
    )
}

export default TodoItem;
