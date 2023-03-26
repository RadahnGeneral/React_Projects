import React, { useState } from "react";
import people from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const peopleData = people;
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(name, job, image, text);

  function handleNextClick() {
    setIndex((prevValue) =>
      prevValue == peopleData.length - 1 ? (prevValue = 0) : prevValue + 1
    );
  }

  function handlePreviousClick() {
    setIndex((prevValue) =>
      prevValue == 0 ? (prevValue = peopleData.length - 1) : prevValue - 1
    );
  }

  function handleRandomClick() {
    const randomIndex = Math.floor(Math.random() * peopleData.length);
    setIndex(randomIndex);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={handlePreviousClick}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNextClick}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandomClick}>
        Surprise me
      </button>
      {/* <button onClick={handleClick}>Click me to move to next person</button> */}
    </article>
  );
}

export default Review;
