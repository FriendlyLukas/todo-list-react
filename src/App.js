/* eslint-disable jsx-a11y/heading-has-content */
import Form from "./Form";
import Tasks from "./Tasks";
import ManageButtons from "./ManageButtons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na React", done: true },
  { id: 2, content: "Pograć w Rummikub", done: true },
];

const hideDoneTasksParameter = false;

function App() {
  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section title={"Dodaj nowe zadanie"} body={<Form />} />
      <Section
        title={"Lista zadań"}
        extraHeaderContent={
          <ManageButtons
            tasks={tasks}
            hideDoneTasksParameter={hideDoneTasksParameter}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDoneTasksParameter={hideDoneTasksParameter}
          />
        }
      />
    </Container>
  );
}

export default App;
