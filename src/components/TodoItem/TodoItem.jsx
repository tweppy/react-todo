export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input type="checkbox" id="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-delete">
        Delete
      </button>
    </li>
  );
}
