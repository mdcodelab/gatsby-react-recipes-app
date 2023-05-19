import React from 'react';
import setUpTags from '../utils/setUpTags';

const TagsList = ({recipes}) => {
  const tags = setUpTags(recipes);
  console.log(tags);
  return (
    <div className="tags-list">
      TagsList
    </div>
  );
}

export default TagsList;
