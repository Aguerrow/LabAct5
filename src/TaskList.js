import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onEdit, onDelete, filterOption }) => {
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return 0;
  });

  const filteredTasks = sortedTasks.filter((task) => {
    if (filterOption === "all") {
      return true;
    } else if (filterOption === "completed") {
      return task.completed;
    } else if (filterOption === "active") {
      return !task.completed;
    }
    return true;
  });

  return (
    <ul className="task-list-box">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TaskList;
