import React, { useEffect, useState } from "react";


const getLocalItems = () => {
  let list = localStorage.getItem("items");
  if (list === null) {
    return [];
  }
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("items"));
  }
};
export default function Listado() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const styles = {
    input: {
      padding: "4px",
      marginRight: "8px",
      width: "70%",
      fontSize: "20px",
    },

    ul: {
      listStyle: "none",
      fontSize: "20px",
    },

    li: {
      margin: "12px 0",
    },
  }

  function addItem() {
    console.log(newItem);

    if (!newItem) {
      alert("Ingrese un item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  //agregar los items al localstorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  return (
    <div style={{}}>
      <br />
      <h1>General</h1>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Ingrese tarea"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        style={{ padding: "4px", marginRight: "8px", width: "70%", fontSize: "20px" }}
      />

      <ul style={{ listStyle: "none", fontSize: "20px", alignItems: "center" }}>
        {items.map((item) => {
          return (
            <li key={item.id} style={{ margin: "12px 0" }}>
              {item.value}{" "}
              <button
                className="delete-button"
                onClick={() => deleteItem(item.id)}
                style={{ fontSize: "10px", marginLeft: "8px", paddingTop: "4px", paddingBottom: "4px", }}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
