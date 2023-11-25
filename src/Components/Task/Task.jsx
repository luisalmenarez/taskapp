import { MagicMotion } from "react-magic-motion";

export const Task = ({ id, titleTask, bodyTask, changeStatus }) => {
  return (
    <MagicMotion>
      <div className="grid place-items-center gap-6 m-2 p-5 bg-neutral-800 rounded-sm">
        <h2 className="font-bold text-rose-600">{titleTask}</h2>
        <p>{bodyTask}</p>
        <button
          onClick={() => changeStatus(id)}
          className=" w-1/2 bg-gray-600 hover:bg-gray-700 transition-all duration-300 p-1 rounded-sm font-bold cursor-pointer">
          Done
        </button>
      </div>
    </MagicMotion>
  );
};
