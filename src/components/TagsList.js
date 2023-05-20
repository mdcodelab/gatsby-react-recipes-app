import React from 'react';
import setUpTags from '../utils/setUpTags';
import { Link } from 'gatsby';

const TagsList = ({recipes}) => {
  const tags = setUpTags(recipes);
  console.log(tags);
  return (
    <div className="tags-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {tags.map((tag, index) => {
          const[text, value]=tag;
          return <Link to={`/${text}`} key={index} className="tag-link">{text} ({value})</Link>
        })}
      </div>
      
    </div>
  );
}

export default TagsList;
