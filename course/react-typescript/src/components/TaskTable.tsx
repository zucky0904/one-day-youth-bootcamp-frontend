import React from "react";
import { Task } from "../";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

// const TaskTable: React.FC<Props> = ({tasks,setTasks}) => {

// }
