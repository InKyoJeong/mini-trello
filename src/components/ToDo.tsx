import React from "react";
import { IToDo } from "src/atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>ToDo</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;
