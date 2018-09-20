import React from "react";

import "./ToDo.css";

function ToDo(props) {
  console.log("Todo", props);
  return (
    <div className="todo">
      <h4 className="todo__label">{props.label}</h4>
      <p className="todo__id">
        id: <span>{props.id}</span>
      </p>
    </div>
  );
}

export default ToDo;
