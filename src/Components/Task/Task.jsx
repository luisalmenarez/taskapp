import { MagicMotion } from "react-magic-motion";

export const Task = ({ id, task, changeStatus }) => {
  return (
    <MagicMotion>
      <div className="grid gap-6 mt-6 p-3 bg-neutral-800 rounded-sm">
        <p>{task}</p>
        <button
          onClick={() => changeStatus(id)}
          className="bg-gray-600 hover:bg-gray-700 transition-all duration-300 p-1  rounded-sm  font-bold cursor-pointer">
          Done
        </button>
      </div>
    </MagicMotion>
  );
};
