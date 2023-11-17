import { useState } from "react";
import { v4 as uuid } from "uuid"; // Con la esta libreria generamos id de manera sencilla

export const FormInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    //El valor del input lo almacenamos en el state task
    setTask(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      task,
      status: false,
    };

    addTask(newTask);
    setTask("");
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-2">
      <input
        className="border-none bg-neutral-800 p-2 font-bold rounded-sm"
        type="text"
        placeholder="Title your task"
        onChange={handleInputChange}
        value={task}
        required
      />
      {/* <textarea
        className="border-none resize-none font-bold p-2 bg-neutral-800 rounded-lg"
        placeholder="Task description"
        onChange={handleInputChange}
        name=""
        id=""
        cols="30"
        rows="4"></textarea> */}
      <input
        type="submit"
        value="Add task"
        className="bg-rose-600 hover:bg-rose-800 transition-all duration-300 p-1 rounded-sm  font-bold cursor-pointer"
      />
    </form>
  );
};
