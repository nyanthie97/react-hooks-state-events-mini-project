import React, {useState} from "react";


function NewTaskForm({ handleAddTask, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTask({text, category});
    setText("");
    setCategory("Code");
  }

function NewTaskForm() {
  return (
    <form className="new-task-form">
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
        <input type="text" name="text" onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
    </form>
  );
}
}
export default NewTaskForm;