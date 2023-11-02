import "./style.css";

const ManageButtons = ({ hideDoneTasksParameter, tasks }) => (
  <div className="tasks__header">
    {tasks.length > 0 && (
      <>
        <button className="tasks__manageButton">
          {hideDoneTasksParameter ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button
          className="tasks__manageButton"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);
export default ManageButtons;
