import React, { useState, useEffect } from "react";
import List from "./components/List";
import AlertAdd from "./components/AlertAdd";
import AlertEmpty from "./components/AlertEmpty";
import AlertRemove from "./components/AlertRemove";
import AlertEdit from "./components/AlertEdit";

function App() {
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleEmpty, setVisibleEmpty] = useState(false);
  const [visibleRemove, setVisibleRemove] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setButtonValue] = useState("Submit");
  const [editedIndex, setEditedIndex] = useState(0);

  const [itemList, setItemList] = useState([]);
  const [item, setItem] = useState("");

  const [newList, setNewList] = useState([]);

  const [notes, setNotes] = useState([]);

  const [myData, setMyData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  function handleChange(e) {
    setItem(e.target.value);
    setInputValue(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();

    if (buttonValue === "Submit") {
      setItemList((prevList) => {
        return [...prevList, item];
      });

      setVisibleAdd(true);
    } else if (buttonValue === "Edit") {
      console.log(itemList);

      const updatedList = itemList.splice(editedIndex, 1);
      itemList.splice(editedIndex, 0, item);
      localStorage.setItem("myItems", JSON.stringify(itemList));
      setNewList(updatedList);
      setVisibleEdit(true);
      setButtonValue("Submit");
    }
  }

  function clearList() {
    if (window.confirm("Delete all items?")) {
      setItemList([]);
      setVisibleEmpty(true);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleAdd(false);
      setVisibleEmpty(false);
      setVisibleRemove(false);
      setVisibleEdit(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [itemList, visibleRemove]);

  useEffect(() => {
    setItemList(itemList);
    setNotes(itemList);
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
        <AlertEmpty visibleEmpty={visibleEmpty} />
        <AlertAdd itemList={itemList} visibleAdd={visibleAdd} />
        <AlertRemove itemList={itemList} visibleRemove={visibleRemove} />
        <AlertEdit itemList={itemList} visibleEdit={visibleEdit} />
        <form className="grocery-form" onSubmit={submitForm}>
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input
              className="grocery"
              placeholder="e.g.eggs"
              value={inputValue}
              type="text"
              name="item"
              onChange={handleChange}
            />
            <button className="submit-btn">{buttonValue}</button>
          </div>
        </form>
        <List
          itemList={itemList}
          setItemList={setItemList}
          visibleRemove={visibleRemove}
          setVisibleRemove={setVisibleRemove}
          item={item}
          setInputValue={setInputValue}
          setButtonValue={setButtonValue}
          setEditedIndex={setEditedIndex}
          setVisibleEdit={setVisibleEdit}
        />
        <button className="clear-btn" onClick={clearList}>
          Clear items
        </button>
      </section>
    </section>
  );
}

export default App;
