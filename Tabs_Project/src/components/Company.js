import React, { useEffect, useState } from "react";

export default function Company({ companies, handleClick, value }) {
  const company_section = companies.map((company, index) => {
    return (
      <button
        className={`job-btn ${value === index && "active-btn"}`}
        key={company}
        onClick={() => handleClick(company)}
      >
        {company}
      </button>
    );
  });

  return <div className="btn-container">{company_section}</div>;
}
