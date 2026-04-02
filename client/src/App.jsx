import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Fetch products
  const fetchProducts = async () => {
    const res = await fetch(`${API_BASE}/products`);
    const data = await res.json();
    setProducts(data);
  };

  // Load products once
  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    await fetch(`${API_BASE}/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price, url }),
    });

    await fetchProducts(); // refresh list

    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 2000);

    setTitle("");
    setPrice("");
    setUrl("");
  };

  // Delete product
  const handleDelete = async (id) => {
    await fetch(`${API_BASE}/delete-product/${id}`, {
      method: "DELETE",
    });

    fetchProducts(); // refresh list
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 className="heading">Price Tracker</h1>

      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Adding Product...</p>
        </div>
      )}

      {success && (
        <div className="success-popup">
          ✅ Product Added Successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          className="inp"
          type="text"
          placeholder="Product URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <br />
        <br />

        <button className="butt" type="submit">
          Add Product
        </button>
      </form>

      <hr />

      <h2>Saved Products</h2>

      {products.map((item) => (
        <div
          key={item._id}
          style={{ border: "1px solid black", margin: 10, padding: 10 }}
        >
          <h3>{item.title}</h3>

          <p>Price: ₹{item.price}</p>

          <a href={item.url} target="_blank" rel="noreferrer">
            View Product
          </a>

          <br />
          <br />

          <button onClick={() => handleDelete(item._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;