import { useState } from "react";
import "./App.css";
import useTask from "./hooks/useTask";
import Page from "./layouts/Page";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

function App() {
  const { setTasks } = useTask();
  const navigate = useNavigate();

  const [input, setInput] = useState('');

  const handlerOnChange = (e: any) => {
    const value = e.target.value;
    setInput(value);
  };

  const handlerSubmit = (e: any) => {
    e.preventDefault();
    setTasks(prev => [...prev, input])
    setInput('')
  };

  const handlerClick = () => {
    navigate('/tasks')
  }
  return (
    <Page>
      <Form onSubmit={(e) => handlerSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New task</Form.Label>
          <Form.Control type="text" value={input} onChange={handlerOnChange} placeholder="Enter task" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
      <Button variant="secondary" onClick={handlerClick}>Go to tasks</Button>
    </Page>
  );
}

export default App;
