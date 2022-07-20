import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [tasksList, setTasksList] = useState(TASKS)
  const [category, setCategory] =useState("All")


  function handleDelete(deletedTaskName) {
    const newTaskList = tasksList.filter((task) => task.text !== deletedTaskName )
    setTasksList(newTaskList)
  }

  function handleFilter(e){
    setCategory(e.target.textContent)
  }
  // console.log(category)

  function handleTaskFormSubmit(newData) {
    setTasksList([...tasksList, newData])
  }

  console.log("tasksList")

  console.log(tasksList)
  const filteredTasks = tasksList.filter((task) => {
    return category === "All" ?  true : task.category === category
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList />
      <CategoryFilter 
        categories={CATEGORIES} 
        onClickCategoryName = {handleFilter}
        selectCategory = {category} 
      />
      <NewTaskForm 
          categories={CATEGORIES.filter((category) => category !== "All")} 
          onTaskFormSubmit={handleTaskFormSubmit}
        />
      <TaskList 
        tasks={filteredTasks} 
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
