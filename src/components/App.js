import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (taskToDelete) => {
    setTasks(tasks.filter(task => task.text !== taskToDelete.text));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const visibleTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
      <NewTaskForm />
      <TaskList tasks={visibleTasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;