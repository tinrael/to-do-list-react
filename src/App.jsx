import { useState } from "react";
import { nanoid } from "nanoid";

import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Task from "./components/Task";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.checked,
  Completed: (task) => task.checked,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

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

  function editTask(id, name) {
    setTasks(tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name };
      } else {
        return task;
      }
    }));
  }

  const taskList = tasks?.map((task) => (
    <Task 
      id={task.id} 
      name={task.name} 
      checked={task.checked} 
      key={task.id} 
      toggleTask={toggleTask} 
      deleteTask={deleteTask} 
      editTask={editTask}
    />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
      key={name} 
      name={name} 
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">{filterList}</div>
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