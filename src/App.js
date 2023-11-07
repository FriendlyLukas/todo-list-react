/* eslint-disable jsx-a11y/heading-has-content */
import Form from "./Form";
import Tasks from "./Tasks";
import ManageButtons from "./ManageButtons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Przejść na React", done: false },
  { id: 2, content: "Pograć w Jenga", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section title={"Dodaj nowe zadanie"} body={<Form />} />
      <Section
        title={"Lista zadań"}
        extraHeaderContent={<ManageButtons tasks={tasks} hideDone={hideDone} />}
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
