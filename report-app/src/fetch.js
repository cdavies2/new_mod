const getData=async () => {
    const response= await fetch('Default-tasks.json');
    const task_data=await response.json();
    return task_data
  }
  
  const start_tasks=getData()
  console.log(start_tasks)