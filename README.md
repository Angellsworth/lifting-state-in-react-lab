# 🍔 Burger Stacker

A React app built to teach and practice **lifting state** between components by building a custom burger!

## 🧠 What This Lab Covers

This project is designed to reinforce core React concepts:

- Unidirectional data flow
- Lifting state up to a common parent
- Passing functions as props
- Managing dynamic UI with the `useState` hook

## 🔧 Components

### `App.jsx` (Parent)
- Holds the master list of available ingredients
- Holds the `stack` state — representing the user's custom burger
- Defines two main functions:
  - `addToBurger(ingredient)` – adds a selected ingredient to the stack
  - `removeFromBurger(index)` – removes an ingredient from the stack by index

### `IngredientList.jsx`
- Displays all available ingredients
- Each ingredient has a `+` button to add it to the burger
- Receives props: `ingredients`, `addToBurger`

### `BurgerStack.jsx`
- Displays the current burger stack
- Each ingredient in the stack has an `X` button to remove it
- Receives props: `stack`, `removeFromBurger`

## 🚀 How to Run

```bash
# clone the repo
git clone https://github.com/your-username/lifting-state-in-react-lab.git

# navigate to the project directory
cd lifting-state-in-react-lab

# install dependencies
npm install

# start the dev server
npm run dev