import { useState, useEffect } from "react";
import TopNav from "../top-nav/top-nav";
import InputItem from "../input/input";
import SearchResults from "../search-results/search-results";
import { getIngredientRecipes, getRecipeInstructions } from "../../api/spoonacular-api/mock";


export default function RecipeApp() {

    const [ingredient, setIngredient] = useState('tomato')
    const [instruction, setInstruction] = useState()
    
    useEffect(() => {
        const loadSearchResults = async() => {
            const results = await getIngredientRecipes(ingredient)
            const recipe = await getRecipeInstructions(results[0].id)
            setInstruction(recipe)
        }

        loadSearchResults()

    }, [ingredient])

    return(
        <>
            <TopNav />
            <InputItem ingredient={ingredient} setIngredient={setIngredient} />
            <SearchResults title={ingredient.title} image={ingredient.image} />
            <SearchResults title={ingredient.title} image={ingredient.image} />
            <SearchResults title={ingredient.title} image={ingredient.image} />
        </>
    )
}
