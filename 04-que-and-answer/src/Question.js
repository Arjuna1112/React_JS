import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Question = ({ title, info }) => {
  const [showInfo, setshowInfo] = useState(true);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setshowInfo(!showInfo)}>
          {showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {!showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
