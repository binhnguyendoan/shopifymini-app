import React, { useEffect, useState } from "react";

export function Product() {
  const apiUrl = "http://localhost:4000/api/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        setError("Error");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <p className = "text-center uppercase font-bold p-2 ">Danh sách sản phẩm</p>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <div className = "grid grid-cols-2 md:grid-cols-2 gap-4 p-2 ">
          {products.map((product) => (
            <div key={product.title} className="product">
              <img src={product.url} alt={product.title} className = "w-full " />
              <h2 className = "text-center uppercase font-bold p-2">{product.title}</h2>
              <p className ="text-center">Price: {product.prices} $</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
