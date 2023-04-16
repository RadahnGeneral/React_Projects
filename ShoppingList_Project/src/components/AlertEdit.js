import React, { useEffect, useState } from "react";

const AlertEdit = ({ itemList, visibleEdit }) => {
  return visibleEdit ? (
    <div className="alert">
      <div className="alert-success">value changed</div>
    </div>
  ) : (
    <div></div>
  );
};

export default AlertEdit;
