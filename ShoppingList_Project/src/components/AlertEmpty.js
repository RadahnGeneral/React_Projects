import React, { useEffect, useState } from "react";

const AlertEmpty = ({ visibleEmpty }) => {
  return visibleEmpty ? (
    <div className="alert">
      <div className="alert-danger">Empty the list</div>
    </div>
  ) : (
    <div></div>
  );
};

export default AlertEmpty;
