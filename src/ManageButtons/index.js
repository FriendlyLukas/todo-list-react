import "./style.css";

const ManageButtons = ({ hideDone, tasks }) => (
  <div className="tasks__header">
    {tasks.length > 0 && (
      <>
        <button className="tasks__manageButton">
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
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
