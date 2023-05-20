import React from "react";

function RecipeTemplate(prop) {
  console.log(prop);
  return (
    <div>
      <h4>{prop.params.title}</h4>
    </div>
  );
}

export default RecipeTemplate;
