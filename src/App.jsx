import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

const getLocalItems = () => {
  const list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState(getLocalItems());

  const items = (event) => {
    setInputList(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(Items));
  }, [Items]);

  const listOfItems = () => {
    if (!inputList) {
      alert("Please write something!");
    } else {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
    }
  };
  const deleteItems = (idx) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== idx;
      });
    });
  };
  const EditingItems = (idx) => {
    console.log("Will Edit");
    const updatedTask = prompt("Edit Your Todo", Items[idx]);
    if (updatedTask) {
      const updatedTasks = [...Items];
      updatedTasks[idx] = updatedTask;
      setItems(updatedTasks);
    }
  };

  return (
    <>
      <div>
        <div className="box flex flex-col justify-center items-center pt-24 w-screen lg:pl-60">
          <div className="heading font-bold mb-4 mobile:text-black bg-orange-400 rounded-lg p-3 drop-shadow-md text-xl">ToDo List</div>
          <div className="inputfield">
            <input
              className="outline-none p-4 mobile:w-96 w-64 rounded-l-lg"
              type="text"
              placeholder="Add a new Task"
              name="input"
              onChange={items}
              value={inputList} 
            />
            <button onClick={listOfItems}>
              <i className="fa-solid fa-plus p-5 font-bold rounded-r-lg bg-orange-300 hover:bg-green-400 hover:transition-all ease-in-out duration-300"></i>
            </button>
          </div>
          <div className="subHeading mt-4 font-bold">Your ToDo's</div>
          <div className="listContainer">
            <ol>
              {Items.map((itemval, index) => {
                return (
                  <TodoList
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}
                    editTask={EditingItems}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
