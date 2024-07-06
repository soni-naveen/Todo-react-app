import React, { useState } from "react";
import "../App.css";

const TodoList = ({ id, text, onSelect, editTask }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="todo_items mt-4 w-[19rem] flex w-[19rem] mobile:w-[27rem] bg-cyan-100 mobile:pr-3 pr-2 mb-4">
        <div className="liItem mobile:w-4/5 w-3/4 rounded-sm p-3">
          <li
            className="hover:cursor-pointer"
            style={{
              color: isActive ? "green" : "",
              textDecoration: isActive ? "line-through" : "none",
            }}
            onClick={handleClick}
          >
            {text}
          </li>
        </div>
        <div className="editDelete flex">
          <button onClick={() => editTask(id)}>
            <i className="fa-solid fa-pen-to-square text-blue-500 p-4 hover:cursor-pointer hover:scale-[1.2] transition-all ease-in duration-200" />
          </button>
          <button onClick={() => onSelect(id)}>
            <i className="fa-solid fa-trash text-red-500 p-4 hover:cursor-pointer hover:scale-[1.2] transition-all ease-in duration-200" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
