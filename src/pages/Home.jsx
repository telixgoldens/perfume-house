import React from "react";
import { useEffect } from "react";
import Products from "../components/Products";
import Carts from "../components/Carts";

const Home = () => {
  useEffect(() => {
    document.title = "Perfume House";
  });
  return (
    <>
      <main className="container py-4">
        <section className="row">
          <div className="col-lg-8">
            <Products />
          </div>
          <div className="col-lg-4">
            <Carts />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
