import { useState } from "react";
import { v4 as uuid } from "uuid"; // Con esta libreria generamos id de manera sencilla

export const FormInput = ({ addTask }) => {
  const [titleTask, setTitleTask] = useState("");
  const [bodyTask, setBodyTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTasks = (e) => {
    e.preventDefault();
    console.log("Se envió el formulario");

    const newTask = {
      id: uuid(),
      titleTask,
      bodyTask,
      status: false,
    };
    addTask(newTask);
    setTasks([...tasks, newTask]);
    setTitleTask(""); // Limpia el campo del título de la tarea
    setBodyTask(""); // Limpia el campo del cuerpo de la tarea
  };

  return (
    <>
      <form onSubmit={handleTasks} className="flex flex-col gap-2">
        <input
          className="border-none bg-neutral-800 p-2 font-bold rounded-sm"
          type="text"
          placeholder="Title your task"
          onChange={(e) => setTitleTask(e.target.value)}
          value={titleTask}
          required
        />
        <textarea
          className="border-none resize-none p-2 bg-neutral-800 rounded-lg"
          placeholder="Task description"
          onChange={(e) => setBodyTask(e.target.value)}
          cols="30"
          value={bodyTask}
          rows="4"></textarea>
        <input
          type="submit"
          value="Add task"
          className="bg-rose-600 hover:bg-rose-800 transition-all duration-300 p-1 rounded-sm font-bold cursor-pointer"
        />
      </form>
    </>
  );
};
