import React from "react";

export default function Categories({ categories, filteredItems }) {
  const categories_buttons = categories.map((category, index) => {
    return (
      <button
        className="filter-btn"
        type="button"
        key={index}
        onClick={() => filteredItems(category)}
      >
        {category}
      </button>
    );
  });

  return <div className="btn-container">{categories_buttons}</div>;
}
