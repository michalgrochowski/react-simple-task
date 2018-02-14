import React from 'react';

import CategoryBox from "./category-box.js"

const MainContainer = props => {
  if (!props.jsonData.categories) {
    return (
      <main className="main">
        <p className="main__loading">Loading...</p>
      </main>
    )
  } else if (props.jsonData.categories) {
    const CategoryBoxes = props.jsonData.categories.map(category => {
      return (
        <CategoryBox 
          key={category.title}
          title={category.title}
          items={category.items}
        />
      )
    })
    
    return (
      <main className="main">
        {CategoryBoxes}
      </main>
    )
  }
}

export default MainContainer;