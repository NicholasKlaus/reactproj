import React from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';


function TodoItem({ el, onChange, removeTodo }) {
    const classes =[];
    if (el.completed){
        classes.push('checked');
    }
    
    return (
        <li className= {`task-list__item ${(el.completed === true) ? 'checked' : ''}`} >
            <div className='wrapper' >
                <InputGroup.Checkbox 
                    onChange={() => onChange(el.id)} 
                    aria-label="Checkbox for following text input" 
                    
                />
                <div className='text-wrap'>{ el.value }</div>
            </div>
            <Button onClick={() => removeTodo(el.id)}  variant="outline-danger">&times;</Button>{' '}
        </li>
    )
}

export default TodoItem;
