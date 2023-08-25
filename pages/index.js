import React, { useState, useEffect } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await fetch("/api/items");
        const data = await result.json();
        setItems(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchItems();
  }, []);

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return (
    <div>
      <h1>Items List</h1>

      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
