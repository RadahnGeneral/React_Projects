import React, { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "success",
  });

  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setButtonValue] = useState("Submit");
  const [editedIndex, setEditedIndex] = useState(0);

  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState("");

  const [newList, setNewList] = useState([]);

  function submitForm(e) {
    e.preventDefault();
    if (!inputValue) {
      setAlert({
        show: true,
        type: "danger",
        msg: "Please type in the required information",
      });
      return;
    }
    if (buttonValue === "Submit") {
      setAlert({
        show: true,
        msg: "Item add to the list",
        type: "success",
      });
      setItemList([...itemList, item]);
    } else if (buttonValue === "Edit") {
      setAlert({
        show: true,
        msg: "Value changed",
        type: "success",
      });
      const updatedList = itemList.splice(editedIndex, 1);
      itemList.splice(editedIndex, 0, item);
      setItem(itemList);
      localStorage.setItem("myItems", JSON.stringify(itemList));
      setNewList(updatedList);
      setButtonValue("Submit");
    }
  }

  function clearList() {
    if (window.confirm("Delete all items?")) {
      setAlert({
        show: true,
        msg: "Empty the list",
        type: "danger",
      });
      setItemList([]);
      localStorage.setItem("myItems", JSON.stringify([]));
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert((prevAlert) => {
        return { ...prevAlert, show: false };
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, [itemList, newList, inputValue]);

  useEffect(() => {
    setItemList(itemList);
    if (itemList.length > 0) {
      localStorage.setItem("myItems", JSON.stringify(itemList));
    }
  }, [itemList, newList]);

  useEffect(() => {
    const myItems = JSON.parse(localStorage.getItem("myItems"));
    if (myItems) {
      setItemList(myItems);
    }
  }, []);

  return (
    <section>
      <section className="section-center">
        {alert.show ? <Alert {...alert} /> : <div></div>}

        <form className="grocery-form" onSubmit={submitForm}>
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input
              className="grocery"
              placeholder="e.g.eggs"
              value={inputValue}
              type="text"
              name="item"
              onChange={(e) => {
                setInputValue(e.target.value);
                setItem(e.target.value);
              }}
            />
            <button className="submit-btn">{buttonValue}</button>
          </div>
        </form>
        <List
          itemList={itemList}
          setItemList={setItemList}
          item={item}
          setInputValue={setInputValue}
          setButtonValue={setButtonValue}
          setEditedIndex={setEditedIndex}
          setAlert={setAlert}
        />
        {itemList.length > 0 && (
          <button className="clear-btn" onClick={clearList}>
            Clear items
          </button>
        )}
      </section>
    </section>
  );
}

export default App;
