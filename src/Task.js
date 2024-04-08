import React, { useState } from "react";

const Task = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);
  const [editedQuantity, setEditedQuantity] = useState(task.quantity);

  const handleEdit = () => {
    if (editedTask.trim()) {
      onEdit(task.id, editedTask, editedQuantity, task.completed); // Pass editedQuantity as well
      setIsEditing(false);
    }
  };

  // Add this function to handle quantity change
  const handleQuantityChange = (e) => {
    setEditedQuantity(parseInt(e.target.value));
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleComplete = () => {
    onEdit(task.id, task.description, task.quantity, !task.completed);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <li
      className={`task-item ${task.completed && !isEditing ? "completed" : ""}`}
    >
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
          />
          <input
            type="number"
            value={editedQuantity}
            onChange={handleQuantityChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      ) : (
        <span className="task-description">
          {task.quantity} {task.description}
        </span>
      )}
      {!isEditing && (
        <>
          <button onClick={handleComplete}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={handleEditToggle}>Edit</button>
        </>
      )}
      {isEditing && <button onClick={handleEdit}>Save</button>}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;
