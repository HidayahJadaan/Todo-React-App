import React, { useState } from "react";

export default function TodoForm({ AddTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskBody, setNewTaskBody] = useState("");

  const handleTitleChange = (e) => {
    setNewTaskTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setNewTaskBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim() !== "" && newTaskBody.trim() !== "") {
      AddTask({ title: newTaskTitle, body: newTaskBody });
      setNewTaskTitle("");
      setNewTaskBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        placeholder="TASK TITLE"
        value={newTaskTitle}
        onChange={handleTitleChange}
        className="todo-input"
      />
      <textarea
        placeholder="TASK BODY"
        value={newTaskBody}
        onChange={handleBodyChange}
        className="todo-input"
      />
      <button type="submit" className="todo-btn">+</button>
    </form>
  );
}
