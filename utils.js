export function renderIngredient(li) {
    const ingredientList = document.createElement('li');
    ingredientList.textContent = `Ingredient: ${li.ingredient} Quantity: ${li.quantity} ${li.measurement}`;
    return ingredientList;
}