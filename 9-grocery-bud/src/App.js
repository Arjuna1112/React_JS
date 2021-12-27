import { useState } from "react";
import Alert from "./alert";
import List from "./list";

function App() {
  const [value, setValue] = useState("");
  const [items, setitems] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      showAlert(true, "Please enter item name", "danger");
    } else if (value && isEdit) {
      setitems(
        items.map((item) => {
          if (editId == item.id) return { ...item, title: value };
          return item;
        })
      );
      setValue("");
      setEditId(null);
      setIsEdit(false);
    } else {
      showAlert(true, "Item Added to the list", "success");
      const newItem = { id: new Date().getTime().toString(), title: value };
      setitems([...items, newItem]);
      setValue("");
    }
  };

  const showAlert = (show, msg, type) => {
    setAlert({ show, msg, type });
  };

  const removeItem = (id) => {
    setitems(items.filter((item) => item.id !== id));
    showAlert(true, "Item removed from the list", "danger");
  };

  const editItem = (id) => {
    const editItem = items.find((item) => item.id === id);
    setIsEdit(true);
    setEditId(id);
    setValue(editItem.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} items={items} />
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "edit" : "add"}
          </button>
        </div>
      </form>
      {items.length > 0 && (
        <div className="grocery-container">
          <List items={items} removeItem={removeItem} editItem={editItem} />
          <button
            className="clear-btn"
            onClick={() => {
              setitems([]);
              showAlert(true, "Removed All Items", "danger");
            }}
          >
            ClearItems
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
