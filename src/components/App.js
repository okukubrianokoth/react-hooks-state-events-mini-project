import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TASKS, CATEGORIES } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // Manage state here
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Delete task handler
  function handleDeleteTask(deletedText) {
    const updatedTasks = taskList.filter((task) => task.text !== deletedText);
    setTaskList(updatedTasks);
  }

  // Add new task handler
  function handleAddTask(newTask) {
    setTaskList([...taskList, newTask]);
  }

  // Filter tasks based on selected category
  const visibleTasks =
    selectedCategory === "All"
      ? taskList
      : taskList.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
<TaskList tasks={visibleTasks} onDelete={handleDeleteTask} />

    </div>
  );
}

export default App;
