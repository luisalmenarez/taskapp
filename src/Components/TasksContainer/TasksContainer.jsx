import { useState } from "react";
import { FormInput } from "../FormInput/FormInput";

export const TasksContainer = () => {
  const [allTask, setAllTask] = useState([]);

  return (
    <div>
      <FormInput />
    </div>
  );
};
