import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Task from "./components/Task";

function App(props) {
  const tasks = props.tasks?.map((task) => (
    <Task 
      id={task.id} 
      name={task.name} 
      checked={task.checked} 
      key={task.id} 
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {tasks}
      </ul>
    </div>
  );
}

export default App;