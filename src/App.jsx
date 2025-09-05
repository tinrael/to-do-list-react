import { useState } from "react";
import { nanoid } from "nanoid";

import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Task from "./components/Task";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const task = { id: `todo-${nanoid()}`, name, checked: false };
    setTasks([...tasks, task]);
  }

  function toggleTask(id) {
    setTasks(tasks.map((task) => {
      if (id === task.id) {
        return { ...task, checked: !task.checked };
      } else {
        return task;
      }
    }));
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => id !== task.id));
  }

  const taskList = tasks?.map((task) => (
    <Task 
      id={task.id} 
      name={task.name} 
      checked={task.checked} 
      key={task.id} 
      toggleTask={toggleTask} 
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;