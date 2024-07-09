// src/components/Tasks/Tasks.tsx
import { Task } from "../../App";
import TaskItem from "./TaskItem";
import "./tasks.css";

const Tasks = ({ 
    tasks, 
    toggleDone,
    handleDelete,
}: {
    tasks: Task[];
    toggleDone: (id: string, done: boolean) => void;
    handleDelete: (id: string) => void;
}) => {
    return (
        <div>
            {tasks.length ? (
            tasks.map((t) => (
                <TaskItem 
                key={t.id} 
                name={t.name} 
                done={t.done}
                id={t.id}
                toggleDone={toggleDone}
                handleDelete={handleDelete}
                />
            ))
            ): (
                <span id="tasks">No tasks yet!</span>

        )}
        </div>
    );
};

export default Tasks;