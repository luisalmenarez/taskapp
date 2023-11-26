import { Task } from "../Task/Task";

export const TaskList = ({ tasks, changeStatus }) => {
  return (
    <section className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <Task key={task.id} {...task} changeStatus={changeStatus} />
      ))}
    </section>
  );
};
