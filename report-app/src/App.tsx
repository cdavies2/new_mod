// src/App.tsx
import { useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid"
import Container from "./Components/Container";
import Input from "./Components/Input";
import Summary from "./Components/Summary/Summary";
import Tasks from "./Components/Tasks/Tasks";
import './app.css';

//var numbers=new Array(1, 4, 9)

export interface Task {
  name: string;
  done: boolean;
  id: string;
}

// const initialTasks = [
//   {
//     name: "Task 1",
//     done: false,
//     id: uuidv4(),
//   },
//   {
//     name: "Task 2",
//     done: false,
//     id: uuidv4(),
//   },
// ];

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    async function fetchTasks() {
      const result=await fetch('./input_tasks.json');
      const task_data=await result.json();
      if (!ignore){
        setTasks(task_data);
      }
    }
    let ignore=false;
    fetchTasks();
    return () => {
      ignore=true;
    }
  }, ([]))
  const handleSubmit=(e: React.FormEvent<HTMLFormElement>, value: string)=> {
    e.preventDefault();
    const newTask={
      name: value,
      done: false,
      id: uuidv4(),
    };
    setTasks((tasks) => [...tasks, newTask]);
  };

  const toggleDoneTask =(id: string, done: boolean)=> {
    setTasks((tasks)=>
      tasks.map((t)=> {
        if(t.id === id){
          t.done=done;
        }
        return t;
      })
    );
  };

  const handleDeleteTask = (id: string) =>{
    setTasks((tasks) => tasks.filter((t) => t.id !==id));
  };

    return (
      <div id='outer'>
        <div id="middle">
        <div id="inner">
            <Container title={"Summary"}>
              <Summary tasks={tasks}/>
            </Container>
            <Container title={"Submit"}>
              <Input handleSubmit={handleSubmit}/>
            </Container>
            <Container title={"Tasks"}>
              <Tasks 
              tasks={tasks}
              toggleDone={toggleDoneTask}
              handleDelete={handleDeleteTask}
              />
            </Container>
          </div>
        </div>
      </div>
    );
}

export default App
