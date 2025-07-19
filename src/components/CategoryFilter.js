import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="categories">
      {categories.map((cat) => (
        <button
          key={cat}
          className={cat === selectedCategory ? "selected" : null}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
