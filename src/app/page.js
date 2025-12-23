"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import "../styles/plp.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <main className="plp-layout">
        <Filters />
        <section className="products-section">
          <h1>Products</h1>
          <ProductGrid products={products} />
        </section>
      </main>
      <Footer />
    </>
  );
}
