import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({
  itemList,
  setItemList,
  setVisibleRemove,
  item,
  setButtonValue,
  setInputValue,
  setEditedIndex,
}) => {
  const [newDeleteList, setNewDeleteList] = useState([]);

  function deleteItem(indexValue) {
    if (window.confirm("Are you sure?")) {
      const updatedList = itemList.splice(indexValue, 1);
      setNewDeleteList(updatedList);
      setVisibleRemove(true);
      localStorage.setItem("myItems", JSON.stringify(itemList));
    }
  }

  function editItem(indexValue) {
    console.log(indexValue);
    console.log(item);

    setButtonValue("Edit");
    setInputValue(itemList[indexValue]);
    setEditedIndex(indexValue);
  }

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

  useEffect(() => {
    setItemList(itemList);
  }, [newDeleteList]);

  return (
    <div>
      <section className="grocery-container">{grocery_item_section}</section>
    </div>
  );
};

export default List;
