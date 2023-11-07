/* eslint-disable jsx-a11y/heading-has-content */
import Form from "./Form";
import Tasks from "./Tasks";
import ManageButtons from "./ManageButtons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

const tasks = [
  { id: 1, content: "Przejść na React", done: false },
  { id: 2, content: "Pograć w Jenga", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  return (
    <Container>
      <Header title={"Lista zadań"} />
      <Section title={"Dodaj nowe zadanie"} body={<Form />} />
      <Section
        title={"Lista zadań"}
        extraHeaderContent={
          <ManageButtons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
