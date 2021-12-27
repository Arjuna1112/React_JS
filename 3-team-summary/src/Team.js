import data from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Team = () => {
  const [index, setindex] = useState(0);
  const { name, job, image, text } = data[index];

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() =>
            setindex(index - 1 < 0 ? index + data.length - 1 : index - 1)
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => setindex(index + 1 > data.length - 1 ? 0 : index + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => setindex(Math.floor(Math.random() * data.length))}
      >
        Random Team Member
      </button>
    </article>
  );
};

export default Team;
