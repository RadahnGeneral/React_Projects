import React, { useEffect, useState } from "react";

const AlertRemove = ({ visibleRemove }) => {
  return visibleRemove ? (
    <div className="alert">
      <div className="alert-danger">item remove from the list</div>
    </div>
  ) : (
    <div></div>
  );
};

export default AlertRemove;
