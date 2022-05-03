import { renderIngredient } from './utils.js';
import { renderMeal } from './utils.js';

// import functions and grab DOM elements
const form = document.getElementById('add-ingredients');
const ingredientList = document.getElementById('ingredient-list');
const remove = document.getElementById('remove');
const save = document.getElementById('save-button');
const mealName = document.getElementById('meal-name');
const mealList = document.getElementById('meal-list');

// let state
let recipes = [];
let meals = [];
//let ingredients = [];


function displayIngredients() {
    ingredientList.textContent = '';
    for (let recipe of recipes) {
        const li = renderIngredient(recipe);
        ingredientList.append(li);
    }
}

function displayMeals() {
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMeal(meal);
        mealList.append(li);
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
    
    displayIngredients();
    form.reset();
});

remove.addEventListener('click', () => {
    recipes.pop();

    displayIngredients();
});

save.addEventListener('click', () => {  
    let meal = {
        ingredientCount: recipes.length,
        name: mealName.value,
    };
    meals.push(meal);
    console.log('list of meals', meal);

    displayMeals();
    mealList.value = '';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
