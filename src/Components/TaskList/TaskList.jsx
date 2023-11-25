import { Task } from "../Task/Task";

export const TaskList = ({ tasks, changeStatus }) => {
  console.log("Tareas recibidas:", tasks);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} {...task} changeStatus={changeStatus} />
      ))}
    </>
  );
};
