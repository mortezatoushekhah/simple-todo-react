import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 100),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>

      <input
        type="text"
        placeholder="add a todo"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="add-btn" onClick={() => addItem()}>
        Add
      </button>

      <div className="todo-list">
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button
                onClick={() => deleteItem(item.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
