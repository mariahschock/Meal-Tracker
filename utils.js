export function renderIngredient(li) {
    const ingredientList = document.createElement('li');
    ingredientList.textContent = `${li.quantity} ${li.measurement} of ${li.ingredient}`;
    return ingredientList;
}