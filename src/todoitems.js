import React from "react";

function TodoItems(props) {
  return (
    <div className="App">
      <p>
        <input
          type="checkbox"
          checked={props.item.complete}
          onChange={() => props.handleChange(props.item.id)}
        />
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItems;
