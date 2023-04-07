import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function JobsDesc({ jobs, value }) {
  const desc_section = jobs[value].duties.map((duty, index) => {
    return (
      <div className="job-desc" key={index}>
        <FaAngleDoubleRight className="job-icon" />
        <p>{duty}</p>
      </div>
    );
  });

  return (
    <div className="job-info">
      <h3>{jobs[value].title}</h3>
      <h4>{jobs[value].company}</h4>
      <p className="job-date">{jobs[value].dates}</p>
      {desc_section}
    </div>
  );
}
