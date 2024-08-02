// src/App.tsx
import { useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid"
import Container from "./Components/Container";
import Input from "./Components/Input";
import Summary from "./Components/Summary/Summary";
import Tasks from "./Components/Tasks/Tasks";
import LLM from "./Components/LLM/LLM";
import './app.css';

export interface Task {
  name: string;
  done: boolean;
  id: string;
}


function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [Message, setNewMessage]=useState("");
  const [newKey, setKey]=useState("");
  let tasks_array=
  [
    {
      name: "",
      done: false,
      id: uuidv4()

    }
  ]
   

    useEffect(() => {
    const fetchTasks= async() => {
      const result=await fetch('./input_tasks.json');
      const task_data=await result.json();
      if (!ignore){
        {
          for(let i=0; i<task_data.length; i++){
            tasks_array[i].name=task_data[i]
            if (i<task_data.length-1)
              {
                tasks_array.push(
                  {
                    name: "",
                    done: false,
                    id: uuidv4()
                  }
                )
              }
            }
          }
        }
        setTasks(tasks_array)
    }
    let ignore=false;

    fetchTasks();
    console.log(tasks)
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
  const questionSubmit=(e:React.FormEvent<HTMLFormElement>, value: string)=> {
    e.preventDefault();
    const newMessage=value;
    setNewMessage(Message + newMessage);
  }
  
  const keySubmit=(e:React.FormEvent<HTMLFormElement>, value: string)=> {
    e.preventDefault();
    const key=value;
    setKey(key + newKey);
  }

  const handleDeleteTask = (id: string) =>{
    
    setTasks((tasks) => tasks.filter((t) => t.id !==id));

  };

    return (
      <div id="outer">
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
           
            <Container title={"LLM"}>
              <LLM questionSubmit={questionSubmit}
              keySubmit={keySubmit}
              />
            </Container>
          </div>
        </div>
      </div>
    );
}

export default App
