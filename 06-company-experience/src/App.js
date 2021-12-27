import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [projects, setprojects] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const respJson = await resp.json();
      setprojects(respJson);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => fetchData(), []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading ...</h1>
      </section>
    );
  } else {
    const { company, dates, duties, title } = projects[value];
    return (
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {projects.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    );
  }
}

export default App;
