import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Task({ task, deleteTask, editTask }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedTask({ ...task }); // Reset editedTask to the original task when toggling edit mode
  };

  const handleInputChange = (e, field) => {
    setEditedTask({
      ...editedTask,
      [field]: e.target.value,
    });
  };

  const handleEditConfirm = () => {
    editTask(editedTask);
    setIsEditing(false); // Toggle off editing mode after confirming edit
  };

  return (
    <div className="Todo">
      <label htmlFor="my-task" className={isChecked ? 'completed' : ""}>
        <input type="checkbox" id="my-task" onChange={handleCheckboxChange} />
        {isEditing ? (
          <div>
            <input
              className="todo-input"
              type="text"
              value={editedTask.title}
              onChange={(e) => handleInputChange(e, "title")}
              autoFocus
            />
            <textarea
              className="todo-input"
              value={editedTask.body}
              onChange={(e) => handleInputChange(e, "body")}
              placeholder="Task body..."
            />
            <button onClick={handleEditConfirm} className="btn">Save</button>
          </div>
        ) : (
          <div onClick={() => setIsEditing(true)}>
            <h3>{task.title}</h3>
            <p>{task.body}</p>
          </div>
        )}
      </label>
      <div>
        <FontAwesomeIcon icon={faTrash} className="Icon" onClick={deleteTask} />
        <FontAwesomeIcon icon={faPenToSquare} className="Icon" onClick={handleEditToggle} />
      </div>
    </div>
  );
}
