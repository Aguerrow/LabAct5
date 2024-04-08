import React, { useState } from "react";
import QuantityDropdown from "./QuantityDropdown"; // Import QuantityDropdown component

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task, quantity); // Pass quantity to addTask function
      setTask("");
    }
  };

  const handleQuantitySelect = (selectedQuantity) => {
    setQuantity(selectedQuantity); // Update quantity state
  };

  return (
    <form onSubmit={handleSubmit}>
      <QuantityDropdown onQuantitySelect={handleQuantitySelect} />{" "}
      {/* Place QuantityDropdown before the form */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add an item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
