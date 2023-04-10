import { FiChevronLeft } from "react-icons/fi";
import React, { useState, useEffect } from "react";

export default function Previous({ prevPerson }) {
  return (
    <div className="prev" onClick={prevPerson}>
      <FiChevronLeft />
    </div>
  );
}
