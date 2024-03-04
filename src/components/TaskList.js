import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
