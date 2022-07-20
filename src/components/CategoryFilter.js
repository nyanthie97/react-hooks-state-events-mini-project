import React from "react";

function CategoryFilter() {
  function CategoryFilter({categories, onClickCategoryName, selectCategory}) {
  
  console.log(selectCategory)
  
    const categoryButton = categories.map((category) => {
  
      const nameOfClass = (category === selectCategory ? "selected" : null)
  
      return (
      <button 
        key={category}
        onClick={onClickCategoryName}
        className={nameOfClass}
      >
        {category}
      </button>
      )
      })
  
  
    return (
      <div className="categories">
        <h5>Category filters</h5>
        {/* render <button> elements for each category here */}
        {categoryButton}
      </div>
    );
  }
}  

export default CategoryFilter;
