import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Task from "./components/Task";
import EditedTasks from "./components/EditedTasks";

function App() {
  const [ListOfTodos, setListOfTodos] = useState([]);
  const [isEditing, setIsEditing] =useState(false);

  const AddTask = (newTask) => {
    setListOfTodos([...ListOfTodos, newTask]);
  };

  const deleteTask = (index)=>{

    const newTodos = ListOfTodos.filter((task,i)=> i !== index)
    // console.log(newTodos);
    setListOfTodos(newTodos)
  }

  const EditTask =(task, index)=>{
   setListOfTodos(
    ListOfTodos.map((todo)=>todo.index === index ? {...todo, task}: todo)
   )
  }

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
                EditTask={(updatedTask) => EditTask(index, updatedTask)}
              />
            ))
          : ""}
      </div>
            
      <p>Add Your First Task</p>
    </div>
  );
}

export default App;
