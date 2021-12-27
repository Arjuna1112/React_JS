import data from "./data";
import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Category";

function App() {
  const [items, setitems] = useState(data);
  const allcategories = ["all", ...new Set(items.map((item) => item.category))];
  const [categories, setCategories] = useState(allcategories);
  const filterItems = (category) => {
    category === "all"
      ? setitems(data)
      : setitems(data.filter((data) => data.category === category));
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
