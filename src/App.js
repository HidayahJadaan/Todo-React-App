import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Task from "./components/Task";

function App() {
  const [ListOfTodos, setListOfTodos] = useState([]);

  const AddTask = (newTask) => {
    setListOfTodos([...ListOfTodos, newTask]);
  };

  const deleteTask = (index) => {
    const newTodos = ListOfTodos.filter((task, i) => i !== index);
    setListOfTodos(newTodos);
  };

  const editTask = (index, updatedTask) => {
    const updatedTodos = [...ListOfTodos];
    updatedTodos[index] = updatedTask;
    setListOfTodos(updatedTodos);
  };
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

      <TodoForm AddTask={AddTask} />
      <div className="Todo-List">
        {ListOfTodos.length > 0
          ? ListOfTodos.map((task, index) => (
              <Task
                key={index}
                task={task}
                deleteTask={() => deleteTask(index)}
                editTask={(updatedTask) => editTask(index, updatedTask)}
                />
            ))
            : ""}
      </div>
      {ListOfTodos.length === 0 ? <p>Add Your First Task 🔥</p> : <p>Remaining Tasks {ListOfTodos.length} 🔥</p>}
    </div>
            </div>
  );
}

export default App;
