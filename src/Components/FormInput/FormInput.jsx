import { useState } from "react";

export const FormInput = () => {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    //El valor del input lo almacenamos en el state task
    task(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Evento enviado");
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title your task"
        className="border-none bg-neutral-800 p-2 font-bold rounded-lg"
        onChange={handleInputChange}
      />
      <textarea
        className="border-none resize-none font-bold p-2 bg-neutral-800 rounded-lg"
        placeholder="Task description"
        onChange={handleInputChange}
        name=""
        id=""
        cols="30"
        rows="4"></textarea>
      <input
        type="submit"
        value="Add task"
        className="bg-sky-600 p-2 rounded-lg font-bold text-lg cursor-pointer"
      />
    </form>
  );
};
