import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import CustomeCard from "../componate/ul/CustomeCard/CustomeCard";

const Product = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setApidata(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Dynamically extract categories based on fetched data
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
    <div className="w-full pt-24">
      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200  text-gray-800 "
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => (
            <NavLink to={`/product/${product.id}`} key={product.id} className="block w-full h-full">
              <CustomeCard img={product.image} title={product.title} description={product.description} price={product.price} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
