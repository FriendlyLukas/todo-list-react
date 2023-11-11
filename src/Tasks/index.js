import "./style.css";

const Tasks = ({hideDone, removeTask, toggleTaskDone, tasks}) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={` tasks__item 
          ${task.done & hideDone ? "tasks__item--hidden" : ""} 
          ${task.done ? "tasks__item--done" : ""}`}
      >
        <button 
          className="tasks__taskButton"
          onClick={() => toggleTaskDone(task.id)}        
        >
          {task.done ? "✔" : ""}
        </button>
        <span className="tasks__taskContent">{task.content}</span>
        <button className="tasks__taskButton tasks__taskButton--remove"
        onClick={() => removeTask(task.id)}
        >  
          🗑
        </button>
      </li>
    ))}
  </ul>
);
export default Tasks;
