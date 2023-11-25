import { TasksContainer } from "./Components";

export const App = () => {
  return (
    <main className="grid w-4/5 place-items-center p-6 gap-2 text-white">
      <h1 className="text-5xl font-bold mt-10">
        Task <span className="text-rose-600">App</span>
      </h1>
      <p>It's easy, just add your pending tasks here</p>
      <TasksContainer />
    </main>
  );
};
