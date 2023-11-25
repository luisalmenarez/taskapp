import { Task } from "../Task/Task";

export const TaskList = ({ tasks, changeStatus }) => {
  console.log("Tareas recibidas:", tasks);
  return (
    <section className="grid grid-cols-2 gap-2">
      {tasks.map((task) => (
        <Task key={task.id} {...task} changeStatus={changeStatus} />
      ))}
    </section>
  );
};
