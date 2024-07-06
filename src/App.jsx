import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

const getLocalItems = () => {
  const list = localStorage.getItem("lists");
  return list ? JSON.parse(list) : [];
};

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const handleInputChange = (event) => {
    setInputList(event.target.value);
  };

  const addListItem = () => {
    if (!inputList) {
      alert("Please write something!");
      return;
    }

    setItems((prevItems) => [...prevItems, inputList]);
    setInputList("");
  };

  const deleteListItem = (idx) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== idx));
  };

  const editListItem = (idx) => {
    const updatedTask = prompt("Edit Your Todo", items[idx]);
    if (updatedTask !== null) {
      const updatedTasks = [...items];
      updatedTasks[idx] = updatedTask;
      setItems(updatedTasks);
    }
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <div className="box flex flex-col justify-center items-center pt-24 w-screen lg:pl-60">
      <div className="heading font-bold mb-4 mobile:text-black rounded-lg p-3 drop-shadow-2xl text-xl">
        TODO LIST
      </div>
      <div className="inputfield flex item-center">
        <input
          className="outline-none p-4 mobile:w-96 w-64 rounded-l-md"
          type="text"
          placeholder="Add a new Task"
          name="input"
          onChange={handleInputChange}
          value={inputList}
        />
        <button
          className="px-5 font-bold rounded-r-md bg-orange-300 active:bg-green-400 hover:transition-all ease-in-out duration-300"
          onClick={addListItem}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="subHeading text-gray-500 mt-4 font-bold">Your Todos</div>
      <div className="listContainer">
        <ol>
          {items.map((itemval, index) => (
            <TodoList
              key={index}
              id={index}
              text={itemval}
              onSelect={() => deleteListItem(index)}
              editTask={() => editListItem(index)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
