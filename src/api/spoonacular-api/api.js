const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'api.spoonacular.com/recipes'

export async function getIngredientRecipes(ingredients) {

    const ingredientParams = ingredients.join(",+")

    const url = `https://${BASE_URL}/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientParams}&number=10&ranking=1`
    console.log(url)
    const res = await fetch(url)
    const searchRecipes = await res.json()
    
    return searchRecipes
}

export async function getRecipeInstructions(recipeId) {

    const url = `https://${BASE_URL}/${recipeId}/analyzedInstructions?apiKey=${API_KEY}`
    const res = await fetch(url)
    const recipeInstructions = await res.json()
    
    return recipeInstructions
}

export async function getRecipeTitle(recipeId) {

    const url = `https://${BASE_URL}/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=false`
    const res = await fetch(url)
    const recipeInfo = await res.json()
    
    return recipeInfo;
}