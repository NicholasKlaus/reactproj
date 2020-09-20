import React from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';



function AddTodo() {
    return(
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Todo</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
                <Button variant="outline-success">Add task</Button>
            </InputGroup>
            
            
        </div>
    )
}


export default AddTodo;
