import React from "react";

function Task({ text, category, onDelete }) {
  function handleClick() {
    onDelete(text); // Pass text to onDelete when button is clicked
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>
        X
      </button>
    </div>
  );
}

export default Task;
