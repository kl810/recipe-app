import ingredientRecipes from './SEARCH-INGREDIENT.json';
import recipeInfo from './RECIPE-INFO.json';
import randomRecipes from './RANDOM-RECIPES.json';

export function getIngredientRecipes() {
    console.log('I am mock')
    return new Promise((resolve, reject) => {
        resolve(ingredientRecipes)
    })
}

export function getRecipeInfo() {
    console.log('I am mock')
    return new Promise((resolve, reject) => {
        resolve(recipeInfo)
    })
}

export function getRandomRecipes() {
    console.log('I am mock')
    return new Promise((resolve, reject) => {
        resolve(randomRecipes.recipes)
    })
}

