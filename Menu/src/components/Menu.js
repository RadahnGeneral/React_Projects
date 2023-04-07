import React, { useState } from "react";

export default function Menu({ items }) {
  const menuItems = items;
  const menuSection = menuItems.map((item) => {
    return (
      <article key={item.id} className="menu-item">
        <img src={item.img} alt={item.title} className="photo" />
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">{item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </div>
      </article>
    );
  });

  return <div className="section-center">{menuSection}</div>;
}
