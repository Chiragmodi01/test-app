import React from "react";
import { useStore } from "../../store/useStore";

const Filters = () => {
  const { sortBy, setSortBy, selectedCategories, setSelectedCategories } =
    useStore();

  return (
    <div className="filters-container">
      <select
        className="filters-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as any)}
      >
        <option value="none">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
      <select
        className="filters-select"
        value={selectedCategories.length === 0 ? "all" : selectedCategories[0]}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "all") {
            setSelectedCategories([]);
          } else {
            setSelectedCategories([value]);
          }
        }}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <button
        className="filters-button"
        disabled={selectedCategories.length === 0}
        onClick={() => setSelectedCategories([])}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
