import { useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { TaskList } from "../TaskList/TaskList";

export const TasksContainer = () => {
  const [allTask, setAllTask] = useState([]);

  const handleAddTask = (task) => {
    setAllTask([...allTask, task]);
  };

  const handleDeleteTask = (id) => {
    const taskFilter = allTask.filter((task) => task.id !== id);
    setAllTask(taskFilter);
  };

  return (
    <section>
      <FormInput addTask={handleAddTask} />
      <TaskList tasks={allTask} changeStatus={handleDeleteTask} />
    </section>
  );
};
