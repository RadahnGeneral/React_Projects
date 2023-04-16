import React, { useEffect, useState } from "react";

const AlertAdd = ({ itemList, visibleAdd }) => {
  let lastElement = itemList.slice(-1);
  return visibleAdd ? (
    <div className="alert">
      <div className="alert-success">{lastElement} added to the list</div>
    </div>
  ) : (
    <div></div>
  );
};

export default AlertAdd;
