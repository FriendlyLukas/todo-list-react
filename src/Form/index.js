import "./style.css";
import { useState } from "react";

const Form = ({addNewTask}) => {
 
 const [newTasksContent, setNewTasksContent] = useState("");
 
 const onFormSubmit =(event)=> {
  event.preventDefault();
  addNewTask(newTasksContent.trim())
  setNewTasksContent("");
 }
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value = {newTasksContent}
        className="form__newTask"
        name="taskName"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({target}) => setNewTasksContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
}

export default Form;
