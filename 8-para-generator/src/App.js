import { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [para, setPara] = useState([]);
  const generateData = () => {
    console.log("Inside Generate", count);
    setPara(data.slice(0, count < 1 ? 1 : count));
  };
  return (
    <section className="section-center">
      <h3>Paragraph Generator</h3>
      <label htmlFor="amount">paragraphs:</label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button type="" onClick={generateData}>
        generate
      </button>
      <article className="lorem-text">
        <p>{para}</p>
      </article>
    </section>
  );
}

export default App;
