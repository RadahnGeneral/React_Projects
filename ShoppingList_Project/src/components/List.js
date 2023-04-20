import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({
  itemList,
  setButtonValue,
  setInputValue,
  setEditedIndex,
  setAlert,
}) => {
  const [newList, setNewList] = useState([]);
  function deleteItem(indexValue) {
    if (window.confirm("Are you sure?")) {
      const newItem = itemList.splice(indexValue, 1);
      setNewList(newItem);
      setAlert({
        show: true,
        msg: "Item deleted from the list",
        type: "danger",
      });
      localStorage.setItem("myItems", JSON.stringify(itemList));
    }
  }

  function editItem(indexValue) {
    setButtonValue("Edit");
    setInputValue(itemList[indexValue]);
    setEditedIndex(indexValue);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert((prevAlert) => {
        return { ...prevAlert, show: false };
      });
    }, 1500);
    return () => clearTimeout(timer);
  }, [newList]);

  let grocery_item_section = itemList.map((item, index) => {
    return (
      <div className="grocery-item" key={index}>
        <p className="title">{item}</p>
        <div>
          <FaEdit className="edit-btn" onClick={() => editItem(index)} />

          <FaTrash className="delete-btn" onClick={() => deleteItem(index)} />
        </div>
      </div>
    );
  });

  return (
    <div>
      <section className="grocery-container">{grocery_item_section}</section>
    </div>
  );
};

export default List;
