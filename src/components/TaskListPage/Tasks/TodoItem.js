import React from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';


function TodoItem({ el, onChange, removeTodo }) {
    
    return (
        <li className= {`task-list__item ${(el.completed === true) ? 'checked' : ''}`} >
            <div className='wrapper' >
                <InputGroup.Checkbox 
                    onChange={() => onChange(el.id)} 
                    checked={el.completed}
                    className="checkbox"
                    aria-label="Checkbox for following text input" 
                    
                />
                <div className='text-wrap'>{ el.value }</div>
            </div>
            <Button onClick={() => removeTodo(el.id)}  variant="outline-danger">&times;</Button>{' '}
        </li>
    )
}

export default TodoItem;
