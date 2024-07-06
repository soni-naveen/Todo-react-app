import React, { useState } from "react";
import "../App.css";

const TodoList = ({ id, text, onSelect, editTask }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="todo_items rounded-md flex justify-between w-[19rem] my-4 px-4 mobile:w-[27rem] bg-cyan-100">
        <div className="liItem flex items-center ">
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
        <div className="editDelete flex items-center p-3 gap-5">
          <button onClick={() => editTask(id)}>
            <i className="fa-solid fa-pen-to-square text-blue-500 hover:cursor-pointer hover:scale-[1.2] transition-all ease-in duration-200" />
          </button>
          <button onClick={() => onSelect(id)}>
            <i className="fa-solid fa-trash text-red-500 hover:cursor-pointer hover:scale-[1.2] transition-all ease-in duration-200" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
