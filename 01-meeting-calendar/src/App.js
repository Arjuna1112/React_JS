import List from "./List";
import data from "./data";
import {useState} from 'react';

function App() {
  const [meetings,setData] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{meetings.length} Meetings for today</h3>
        <List meetings={meetings}/>
        <button onClick={()=>setData([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
