import React from 'react';

const CategoryBox = (props) => {
  const CategoryLinks = props.items.map((link) => {
    return (
      <li key={link.title} className="category-box__list-item">
        <a key={link.title} className="category-box__link" href={link.link} title={link.title} target="_blank" rel="noopener">{link.title}</a>
      </li>
    )
  })
  
  return (
    <article className="category-box show">
      <h2 className="category-box__title">{props.title}</h2>
      <ul className="category-box__list">
        {CategoryLinks}
      </ul>
    </article>
  )
}

export default CategoryBox;