import React, { useState, useEffect } from "react";

import data from "./data";
import Next from "./components/Next";
import Previous from "./components/Previous";
import DoubleQuote from "./components/DoubleQuote";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// function App() {
//   const [people, setPeople] = useState(data);
//   const [value, setValue] = useState(0);

//   function nextPerson() {
//     let newValue;
//     if (value === people.length - 1) newValue = 0;
//     else newValue = value + 1;
//     setValue(newValue);
//   }

//   function prevPerson() {
//     let newValue;
//     if (value === 0) newValue = people.length - 1;
//     else newValue = value - 1;
//     setValue(newValue);
//   }

//   useEffect(() => {
//     let lastIndex = people.length - 1;
//     if (value < 0) {
//       setValue(lastIndex);
//     }
//     if (value > lastIndex) {
//       setValue(0);
//     }
//   }, [value, people]);

//   useEffect(() => {
//     let slider = setInterval(() => {
//       setValue(value + 1);
//     }, 5000);
//     return () => clearInterval(slider);
//   }, [value, people]);

//   const { id, image, name, title, quote } = people[value];
//   return (
//     <main>
//       <section className="section">
//         <div className="title">
//           <h2 className="">
//             <span>/</span>
//             Reviews
//           </h2>
//         </div>
//       </section>
//       <section className="section-center">
//         <article key={id}>
//           <img src={image} className="person-img" alt={name} />
//           <h4>{name}</h4>
//           <div className="title">{title}</div>
//           <p className="text">{quote}</p>
//           <DoubleQuote />
//         </article>
//         <Previous prevPerson={prevPerson} />
//         <Next nextPerson={nextPerson} />
//       </section>
//     </main>
//   );
// }

function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (value < 0) {
      setValue(lastIndex);
    }
    if (value > lastIndex) {
      setValue(0);
    }
  }, [value, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [value]);

  const section_center = people.map((person, index) => {
    let position = "nextSlide";
    const { id, image, name, title, quote } = person;
    if (index === value) {
      position = "activeSlide";
    }
    if (index === value - 1 || (value === 0 && index === people.length - 1)) {
      position = "lastSlide";
    }

    return (
      <div>
        <article key={id} className={position}>
          <img src={image} className="person-img" />
          <h4>{name}</h4>
          <div className="title">{title}</div>
          <p className="text">{quote}</p>
          <DoubleQuote />
        </article>
        <button className="prev" onClick={() => setValue(value - 1)}>
          {" "}
          <FiChevronLeft />{" "}
        </button>
        <button className="next" onClick={() => setValue(value + 1)}>
          {" "}
          <FiChevronRight />{" "}
        </button>
      </div>
    );
  });

  return (
    <main>
      <section className="section">
        <div className="title">
          <h2 className="">
            <span>/</span>
            Reviews
          </h2>
        </div>
        <div className="section-center">{section_center}</div>
      </section>
    </main>
  );
}
export default App;
