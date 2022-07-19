import React from 'react'

const TodoList = ({todos}) => {
  return (
    <div className='todo-container'>
         {todos.map ((todo, index)=>(
            <div key={index} className='todo-item'>
                <p>{todo}</p>
                <i className='fas fa-times-circle'></i>
            </div>
         ))}
    </div>
  )
}

export default TodoList
