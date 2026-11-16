
"use client";
import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [indexToUpdate, setIndexToUpdate] = useState(null);

  // ✅ Add (Create)
  const addTodo = () => {
    if (task.trim() === "") return alert("Enter a task!");
    setTodos([...todos, task]);
    setTask("");
  };

  // ✅ Delete (Remove)
  const deleteTodo = (indexToDelete) => {
    const newList = todos.filter((_, i) => i !== indexToDelete);
    setTodos(newList);
  };

  const updateTodo = () => {
    if (task.trim() === "") return alert("Enter a task!");

    const updatedList = todos.map((item, i) => {
      return i === indexToUpdate ? task : item;
    });

    console.log("updatedList", updatedList);

    setTodos(updatedList);
    setIndexToUpdate(null);
    setTask("");
  };

  const showUpdateForm = indexToUpdate != null ? true : false;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f1f5f9",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "white",
          color:"black",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1e293b",
            marginBottom: "8px",
            fontSize: "28px",
          }}
        >
          Todo CRUD App
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Manage your daily tasks
        </p>

        {/* Input + Add button */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "25px",
          }}
        >
          <input
            style={{
              flexGrow: 1,
              minWidth: 0,
              padding: "12px",
              border: "1px solid #cbd5e1",
              borderRadius: "6px",
              outline: "none",
              fontSize: "14px",
            }}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
          />

          <button
            style={{
              padding: "10px 18px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => {
              if (showUpdateForm) {
                updateTodo();
              } else {
                addTodo();
              }
            }}
          >
            {showUpdateForm ? "Update" : "Add"}
          </button>

          {showUpdateForm && (
            <button
              style={{
                padding: "10px 14px",
                background: "#64748b",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => {
                setIndexToUpdate(null);
                setTask("");
              }}
            >
              Cancel
            </button>
          )}
        </div>

        {/* List */}
        <h3
          style={{
            color: "#334155",
            fontSize: "17px",
            marginBottom: "15px",
          }}
        >
          My Tasks ({todos.length})
        </h3>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {todos.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "7px",
                padding: "12px",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "#94a3b8", fontSize: "13px" }}>
                {index + 1}.
              </span>

              <span
                style={{
                  flex: 1,
                  color: "#334155",
                  fontSize: "14px",
                  overflowWrap: "anywhere",
                }}
              >
                {item}
              </span>

              <div style={{ display: "flex", gap: "6px" }}>
                <button
                  style={{
                    background: "#f59e0b",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    padding: "7px 10px",
                  }}
                  onClick={() => {
                    console.log("clicked row item:", item, "row index:", index);
                    setIndexToUpdate(index);
                    setTask(item);
                  }}
                >
                  Edit
                </button>

                <button
                  style={{
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    padding: "7px 10px",
                  }}
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              padding: "20px",
              fontSize: "14px",
            }}
          >
            No tasks yet. Add your first task!
          </p>
        )}
      </div>
    </div>
  );
}
