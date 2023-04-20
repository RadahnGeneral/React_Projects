import React from "react";

const Alert = ({ show, type, msg }) => {
  return show ? (
    <div className="alert">
      <div className={`alert-${type}`}>{msg}</div>
    </div>
  ) : (
    <div></div>
  );
};

export default Alert;
