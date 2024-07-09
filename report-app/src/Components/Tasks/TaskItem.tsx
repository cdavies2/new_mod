// src/Components/Tasks/TaskItem.tsx
import './taskItem.css'
const TaskItem= ({ 
    name,
    done,
    id,
    toggleDone,
    handleDelete, 
}: { name: string;
     done: boolean;
     id: string;
     toggleDone: (id: string, done: boolean) => void;
     handleDelete: (id: string) => void;

 }) => {
    return (
    <div id="Outer">
      <div id="Inner">
        <input type="checkbox" 
        checked={done} 
        onChange={() => toggleDone(id, !done)}
        />
        {name}
      <button 
      type="button"
      onClick={() => handleDelete(id)}
      >
        Delete
      </button>
      </div>
    </div>
    );
};

export default TaskItem;