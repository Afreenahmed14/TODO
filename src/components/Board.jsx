import { useContext, useState } from "react";
import { BoardContext, useBoard } from "../BoardContext";
import Column from "./Column";
import Trash from "./Trash";

function TaskInput(){
  const {dispatch}=useContext(BoardContext)
const [text,setText]=useState("");
const handleSubmit=(e)=>{
  e.preventDefault();
  if(!text.trim()) return;
  dispatch({type:"ADD_TASK",payload:{text}});
  setText("");
}


return(
  <div>
  <h1 className="head">Kanban Board</h1>
  <form className="task-form" onSubmit={handleSubmit}> 
    <input className="ip-box" type="text" placeholder="Add a new task" 
   value={text} onChange={(e)=>setText(e.target.value)}/>
   <button type="submit" className="button">AddTask</button>
  </form>
  </div>
)
}

export default function Board() {
  const {state}=useBoard();
  return (
    <>
    <TaskInput/>
    <div className="board">
      {Object.values(state.columns).map((col) => (
        <Column key={col.id} column={col} />  
      ))}
      <Trash />
    </div>
    
    </>
  )
}
