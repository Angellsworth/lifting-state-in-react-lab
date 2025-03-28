// src/components/IngredientList/IngredientList.jsx
// this child component is responsible for displaying the list of all available ingredients

const IngredientList = (props) => {
    return (
      // this unordered list will hold ingredients
      <ul>
        {/* loop through the ingredients passed down from the App component with props */}
        {props.ingredients.map((ingredient, index) => (
          // each <li> is one ingredient — we give it a key (for mapping)
          // and we also give it a background color based on the color value in the ingredient object in app
          <li
            key={index}
            style={{ backgroundColor: ingredient.color }}
          >
            {/* show the name of the ingredient */}
            {ingredient.name}
            
            {/* add a button to add this ingredient to the burgerStack when clicked */}
            {/* calling the addToBurger function that was passed from App as a prop */}
            <button onClick={() => props.addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;