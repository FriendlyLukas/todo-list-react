import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={` tasks__item 
          ${
            task.done & props.hideDoneTasksParameter
              ? "tasks__item--hidden"
              : ""
          } 
          ${task.done ? "tasks__item--done" : ""}`}
      >
        <button className="tasks__taskButton">{task.done ? "✔" : ""}</button>
        <span className="tasks__taskContent">{task.content}</span>
        <button className="tasks__taskButton tasks__taskButton--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);
export default Tasks;
