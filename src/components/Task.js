import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Task({ task, deleteTask, editTask }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedTask(task); // Reset editedTask to the original task when toggling edit mode
  };

  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
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
          <input
            type="text"
            value={editedTask}
            onChange={handleInputChange}
            onBlur={handleEditConfirm}
            autoFocus
          />
        ) : (
          <span onClick={() => setIsEditing(true)}>{task}</span>
        )}
      </label>
      <div>
        <FontAwesomeIcon icon={faTrash} className="Icon" onClick={deleteTask} />
        <FontAwesomeIcon icon={faPenToSquare} className="Icon" onClick={handleEditToggle} />
      </div>
    </div>
  );
}
