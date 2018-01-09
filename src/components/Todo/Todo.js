import React from 'react';
import './Todo.css'

const todo = (props) => {
  return (
    <ul>
    {props.todos.map((todo, i) => {
      let className = '';
      if (todo.completed === true){
        className += ' completed';
      } else {
        className;
      }
        return <li className={className} value={i} key={todo.text} onClick={props.completeTodo}>{todo.text}<button  onClick={props.deleteTodo}>
        Delete</button></li>
      })
    }
  </ul>);
}

export default todo;
