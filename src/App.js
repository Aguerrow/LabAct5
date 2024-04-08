import React, { useState } from "react";
import Header from "./Header";
import Title from "./Title";
import AddTask from "./AddTask";
import DropdownMenu from "./DropdownMenu";
import TaskList from "./TaskList";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterOption, setFilterOption] = useState("all");

  const handleAddTask = (newTask, quantity) => {
    const newTaskList = [
      ...tasks,
      {
        id: Date.now(),
        description: newTask,
        quantity: quantity,
        completed: false,
      },
    ];
    setTasks(newTaskList);
  };

  const handleEditTask = (id, updatedTask, updatedQuantity, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            description: updatedTask,
            quantity: updatedQuantity,
            completed: isCompleted,
          }
        : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleFilterChange = (selectedOption) => {
    setFilterOption(selectedOption);
  };

  const handleSortByName = () => {
    const sortedTasks = [...tasks].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    setTasks(sortedTasks);
  };

  const handleSortByQuantity = () => {
    const sortedTasks = [...tasks].sort((a, b) => a.quantity - b.quantity);
    setTasks(sortedTasks);
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <center>
      <div className="box-container">
        <div className="container">
          <Header />
          <Title />
          <AddTask addTask={handleAddTask} />
          <div className="buttons-container">
            <button onClick={handleSortByName}>Sort by Name</button>
            <button onClick={handleSortByQuantity}>Sort by Quantity</button>
            <button onClick={handleClearAll}>Clear All</button>
          </div>
          <DropdownMenu onFilterChange={handleFilterChange} />
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            filterOption={filterOption}
          />
          <Footer items={tasks} />
        </div>
      </div>
    </center>
  );
}

export default App;
