import React, { useState } from "react";

export default function Question(props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question" key={props.id}>
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {" "}
          {showInfo ? "-" : "+"}{" "}
        </button>
      </header>
      <div>{showInfo && <p> {props.info} </p>}</div>
    </article>
  );
}
