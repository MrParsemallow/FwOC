import { useState } from "react";

export default function ToDo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    // return if task is empty so we dont add empty tasks
    if (task == "") return;

    // set the new array of todos by copying the old one and adding the new task
    setTodos([...todos, task]); // ... called the spread operator

    // Clear input
    setTask("");
  };

  return (
    <>
      <h3>My ToDos</h3>

      {/* bind the input value to the task state and update it on change */}
      <input
        type="text"
        value={task}
        defaultValue={"Todo"}
        onChange={(e) => setTask(e.target.value)} // from the event's target (the input element) and update our state.
        className="max-w-56 mx-auto bg-neutral-800 text-white border border-neutral-700 my-4 rounded-xl"
      />

      {/* calls addTodo when the button is clicked */}
      <button
        onClick={addTodo}
        className=" w-24 mx-auto px-4 py-2 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition-colors"
      >
        Add
      </button>

      {/* maps the array items with a key, so react can update only changed items */}
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
