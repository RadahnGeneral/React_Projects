import { FiChevronRight } from "react-icons/fi";
import React, { useState, useEffect } from "react";

export default function ({ nextPerson }) {
  return (
    <div className="next" onClick={nextPerson}>
      <FiChevronRight />
    </div>
  );
}
