import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


function AddTodo({onCreate}){
    const [value, setValue] = useState('');


    function submitHandler(event){
        event.preventDefault();

        if (value.trim()){
            onCreate(value);
            setValue('');
        }
    }

    return(
        <form className='addForm' onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <Button variant="outline-success" type="submit">Add task</Button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}


export default AddTodo;