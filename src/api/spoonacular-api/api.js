const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'api.spoonacular.com'


export async function getIngredientRecipes(ingredients) {

    const ingredientParams = ingredients.join(",+")

    const url = `https://${BASE_URL}/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientParams}&number=10&ranking=1`
    console.log(url)
    const res = await fetch(url)
    const searchRecipes = await res.json()
    
    return searchRecipes
}

export async function getRandomRecipes() {
    const url = `https://${BASE_URL}/recipes/random?apiKey=${API_KEY}&number=15`
    console.log(url)
    const res = await fetch(url)
    const randomRecipes = await res.json()
    
    return randomRecipes.recipes
}

// export async function getRecipeInstructions(recipeId) {

//     const url = `https://${BASE_URL}/recipes/${recipeId}/analyzedInstructions?apiKey=${API_KEY}`
//     const res = await fetch(url)
//     const recipeInstructions = await res.json()
    
//     return recipeInstructions
// }

export async function getRecipeInfo(recipeId) {

    const url = `https://${BASE_URL}/recipes/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=false`
    const res = await fetch(url)
    const recipeInfo = await res.json()
    
    return recipeInfo;
}