// import functions and grab DOM elements
const form = document.getElementById('add-ingredient');
// let state
let recipes = [];

// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const addRecipe = new FormData(form);

    const recipe = {
        ingredient: addRecipe.get('ingredient'),
        quantity: addRecipe.get('quantity'),
        measurement: addRecipe.get('measurement'),
    };
    recipes.push(recipe);

    recipe = [];
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
