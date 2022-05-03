import { renderIngredient } from './utils.js';

// import functions and grab DOM elements
const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');
// let state
let recipes = [];
let ingredients = [];


function renderIngredients() {
    ingredientList.textContent = '';
    for (let ingredient of ingredients) {
        const li = renderIngredient(ingredient);
        ingredientList.append(li);
    }
}
// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const addRecipe = new FormData(form);

    let recipe = {
        ingredient: addRecipe.get('ingredient'),
        quantity: addRecipe.get('quantity'),
        measurement: addRecipe.get('measurement'),
    };
    recipes.push(recipe);
    console.log('list of recipes', recipe);
    
    renderIngredients();

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
