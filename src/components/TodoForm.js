import React, { useState } from 'react'

export default function TodoForm({ AddTask }) {

    const [TaskTodo, setTaskTodo] = useState("");

    const handleSubmit = (e)=>{
      e.preventDefault();
      
      console.log(TaskTodo)

      AddTask(TaskTodo)

      setTaskTodo('')
    }

    
  return (
    <form className="TodoForm" onSubmit={ handleSubmit}>
    <input   type="text" 
    className="todo-input" 
    placeholder="Write Your Task"  
    value={TaskTodo}
    onChange={(e)=> setTaskTodo(e.target.value)}/>
    <button className="todo-btn" type="submit">+</button>

  </form>

  )
}
