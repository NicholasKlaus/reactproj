import React from 'react';
import { TodoItem } from '../index';

export const TodoList = ({ data, onToggle, removeTask }) => {
  return (
    <ul className='task-list'>
      {data.map((el, key) => {
        return (
          <TodoItem el={el} key={key} onChange={onToggle} removeTodo={removeTask}/>
        )
      })}
    </ul>
  )
}
