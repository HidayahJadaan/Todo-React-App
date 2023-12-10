import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // Import the faTrash icon

import React, { useState } from "react";

export default function Task({ task , deleteTask, EditTask}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
  
          
     <div className="Todo">
     <label htmlFor="my-task" className={isChecked? 'completed': ""} >
      <input type="checkbox" id="my-task" onChange={handleCheckboxChange} />
        {task}
      </label>
      <div>
      <FontAwesomeIcon icon={faTrash} className="Icon" onClick={()=>deleteTask()}/>
        <FontAwesomeIcon icon={faPenToSquare} className="Icon" onClick={()=>EditTask(task)}/>
      </div>
     </div>



  );
}
