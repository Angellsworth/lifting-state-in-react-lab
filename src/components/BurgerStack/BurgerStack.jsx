// child that displays the burger being built
// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
      // this is where we stack the burger ingredients
      <ul>
        {/* loop through each item in the stack array that was passed from the parent */}
        {props.stack.map((ingredient, index) => (
          // for each ingredient, create a list item
          <li
            key={index} // key helps track which items are which
            style={{ backgroundColor: ingredient.color }} // we style it using the color from the ingredient object in app
          >
            {ingredient.name}
  
            {/* this button removes specific ingredient from the burger */}
            {/* calls the removeFromBurger function from props and gives it the index of the ingredient */}
            <button onClick={() => props.removeFromBurger(index)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;