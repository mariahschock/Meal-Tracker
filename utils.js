export function renderIngredient(li) {
    const ingredientList = document.createElement('li');
    ingredientList.textContent = `${li.quantity} ${li.measurement} of ${li.ingredient}`;
    return ingredientList;
}

export function renderMeal(li) {
    const mealList = document.createElement('li');
    mealList.textContent = `${li.name} - ${li.ingredientCount} ingredients`;
    return mealList;
}