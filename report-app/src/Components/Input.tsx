// src/components/Input.tsx
import { FormEvent, useState } from "react";
import './input.css';


const InputContainer = ({
    handleSubmit,
}: {
    handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) => {
    const [newTaskName, setNewTaskName]=useState(""); 
    return (
      <form 
      action="" 
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        handleSubmit(e, newTaskName);
        setNewTaskName("");
      }}
      >
        <div>
          <label>Enter your next task:</label>
          <input  
          type="text"
          value={newTaskName} // Set the input value to newTask
          onChange={(e) => setNewTaskName(e.target.value)} // Set newTask to the input value whenever the user types something
          />
        </div>
        <button
          type="submit"
        >
          Add task
        </button>
      </form>
    );
  };
  
  export default InputContainer;