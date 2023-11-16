import { TasksContainer } from "./Components";

export const App = () => {
  return (
    <div className="grid place-items-center p-6 gap-2 text-white">
      <h1 className="text-5xl font-bold mt-16">
        Task <span className="text-sky-600">App</span>
      </h1>
      <p>It's easy, just add your pending tasks here</p>
      <TasksContainer />
    </div>
  );
};
