const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'api.spoonacular.com/recipes'

export async function getIngredientRecipes(ingredients) {

    const ingredientParams = ingredients.join(",+")

    const url = `https://${BASE_URL}/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientParams}&number=10&ranking=1`
    console.log(url)
    const res = await fetch(url)
    const ingredientRecipes = await res.json()
    
    return ingredientRecipes
}

// export async function getRecipeInstructions(recipeId) {

//     const url = `https://${BASE_URL}/${recipeId}/analyzedInstructions?apiKey=${API_KEY}`
//     `https://${BASE_URL}/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric&exclude=minutely`
//     const res = await fetch(url)
//     const recipeInstructions = await res.json()
    
//     return recipeInstructions
// }