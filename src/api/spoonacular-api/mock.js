import ingredientRecipes from './SEARCH-INGREDIENT.json';
import recipeInstructions from './RECIPE-INSTRUCTIONS.json';

export function getIngredientRecipes() {
    console.log('I am mock')
    return new Promise((resolve, reject) => {
        resolve(ingredientRecipes)
    })
}

export function getRecipeInstructions() {
    console.log('I am mock')
    return new Promise((resolve, reject) => {
        resolve(recipeInstructions)
    })
}

