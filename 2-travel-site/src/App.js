import data from "./data";
import Tours from "./tours/Tours";
import { useEffect, useState } from "react";
import Refresh from "./tours/Refresh";
import Loading from "./tours/Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, settours] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const respJson = await resp.json();
      setloading(false);
      settours(respJson);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => fetchData(), []);

  const removeTour = (id) => settours(tours.filter((tour) => tour.id !== id));

  const refreshTour = () => settours(data);

  return (
    <main>
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <Refresh refreshTour={refreshTour} />
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  );
}

export default App;
