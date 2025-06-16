import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CustomeCard from "../componate/ul/CustomeCard/CustomeCard";
import Hero from "../componate/Hero";
import Price from "../componate/Price";
import ProductHero from "../componate/ProductHero";

const Product = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // https://fakestoreapi.com/products
      const res = await axios.get("https://riya-art-infotech-backend-2-0.onrender.com/product/read");
      setApidata(res.data?.data);
      console.log(res.data?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const categories = ["All", ...new Set(apidata.map((p) => p.category))];

  const filteredProducts = apidata.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <section>
        <div className="w-full pt-14 lg:pt-20 xl:pt-20 bg-gradient-to-b from-blue-300 to-bg-[#fff]">
          <div className="main-container">
            <ProductHero />
          </div>
        </div>
      </section>

      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          {/* Search Form */}
          <form className=" max-w-xl py-1 px-4 mt-6 md:mt-0 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent w-full focus:outline-none pr-4 font-primary font-size-xs border-0 focus:ring-0 px-0 py-0"
              name="topic"
            />
            <button
              type="submit"
              className="flex flex-row items-center justify-center min-w-[100px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-[var(--bg-color-xi)] hover:bg-[var(--bg-color-iii)] text-white border-transparent py-1.5 h-[28px] -mr-3 cursor-pointer "
            >
              Search
            </button>
          </form>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[var(--bg-color-iii)] ${
                  selectedCategory === category
                    ? "bg-[var(--bg-color-xi)] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 pb-10">
          {filteredProducts.map((product) => (
            <NavLink
              to={`/product/${product._id}`}
              key={product.id}
              className="block w-full h-full"
            >
              <CustomeCard
                img={product.images[0]}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </NavLink>
          ))}
        </div>
      </div>

      <section>
        <div className="w-full section-space bg-[var(--bg-color-i)] ">
          <div className="main-container">
            <Price />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
