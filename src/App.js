import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Task from "./components/Task";

function App() {
  const [listOfTodos, setListOfTodos] = useState([]);

  const addTask = (newTask) => {
    setListOfTodos([...listOfTodos, newTask]);
  };

  const deleteTask = (index) => {
    const newTodos = listOfTodos.filter((task, i) => i !== index);
    setListOfTodos(newTodos);
  };

  const editTask = (index, updatedTask) => {
    const updatedTodos = [...listOfTodos];
    updatedTodos[index] = updatedTask;
    setListOfTodos(updatedTodos);
  };

// ===================== DARK MODE ================================
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );




  return (
   
    <div>

<button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >

        {isFakeDark ? "☀️" :"🌙"}
         </button>

      <div className="TodoWrapper">
        <h1>📝✍️ Today's Tasks 🎯⏰</h1>

        <TodoForm AddTask={addTask} />

        <div className="Todo-List">
          {listOfTodos.length > 0 && (
            listOfTodos.map((task, index) => (
              <Task
                key={index}
                task={task}
                deleteTask={() => deleteTask(index)}
                editTask={(updatedTask) => editTask(index, updatedTask)}
              />
            ))
          ) }
        </div>

        {listOfTodos.length > 0 ? (
          <p>Remaining Tasks: {listOfTodos.length} 🔥</p>
        ): (
          <h4>Add Your First Task 🔥</h4>
        )}
      </div>
    
    </div>
  );
}

export default App;
