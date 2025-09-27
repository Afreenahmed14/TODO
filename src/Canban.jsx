import React from 'react'
import { useState } from 'react';
import './Canban.css'
const Canban = () => {
   const [todo, setTodo] = useState("");

const handleSubmit = (e) =>{
        e.preventDefault();
}
  return (
    <div className='a'>
      <form onSubmit={handleSubmit}>
      
      <div className='b'>
      <input type="text" placeholder='What to do' value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button type='submit'>Add</button>
      </div>


      <div className='c'> 
      <h3>ToDo</h3>
      </div>


      <div className='d'>
        <h3>In Progress</h3>
      </div>

      <div className='e'>
        <h3>Done</h3>
      </div>

      <div className='f'>
        <h4>Trash🗑️</h4>
      </div>

      </form>
    </div>
  )
}

export default Canban
