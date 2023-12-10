import { useState } from "react";
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

  return (
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
      <p>Add Your First Task 🔥</p>
    </div>
  );
}

export default App;
