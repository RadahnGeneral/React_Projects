import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    let value;
    if (count <= 0 || count === "") value = 1;
    else if (count > data.length) value = data.length;
    else value = count;

    const user_choice_para = data.slice(0, value);
    setText(user_choice_para);
  };

  const para_section = text.map((para, index) => {
    return (
      <p key={index} className="result">
        {para}
      </p>
    );
  });

  return (
    <section className="section-center">
      <h3>Tire of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>

        <input
          id="amount"
          name="amount"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <main>{para_section}</main>
    </section>
  );
}

export default App;
