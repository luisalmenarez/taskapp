import { TasksContainer } from "./Components";

export const App = () => {
  return (
    <main className="grid w-4/5 place-items-center p-6 gap-2 text-white">
      <h1 className="text-5xl font-bold mt-6">
        Task <span className="text-rose-600">App</span>
      </h1>
      <p className="text-center">It's easy, just add your pending tasks here</p>
      <TasksContainer />
    </main>
  );
};
