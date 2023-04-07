import React, { useState } from "react";

import items from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const allAcategories = ["all", ...new Set(items.map((item) => item.category))];

export default function App() {
  const [menuItems, setMenuItems] = useState(items);
  console.log(allAcategories);

  function filteredItems(category) {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const clickedItems = items.filter((item) => item.category === category);
    setMenuItems(clickedItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allAcategories} filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
