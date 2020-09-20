import React from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';


function TodoItem({ el }) {

    return (
        <li className='listItem'>
            <div className='wrapper'>
                <InputGroup.Checkbox 
                    onChange={() => console.log(el.id)} 
                    aria-label="Checkbox for following text input" 
                />
                { el.value }
            </div>
            <Button onClick={() => console.log("deleted", el.id)} variant="outline-danger">&times;</Button>{' '}
        </li>
    )
}

export default TodoItem;
