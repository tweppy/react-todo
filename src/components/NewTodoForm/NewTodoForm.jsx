import { useState } from "react";

export function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    addTodo(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
      <button className="btn">Add Todo</button></div>
      
    </form>
  );
}
