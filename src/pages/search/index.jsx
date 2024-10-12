import './search.css'
import { useState, useEffect } from "react";
import InputItem from "../../components/input/input";
import Tag from "../../components/tag/tag";
// import RandomRecipes from '../../components/random-recipes/random-recipes';
import RecipeCard from "../../components/recipe-card/recipe-card";
import spoonacularApi from "../../api/spoonacular-api";


export default function SearchPage() {

    const [ingredientsList, setIngredientsList] = useState([])

    const [searchResults, setSearchResults] = useState([])

    // const [randomRecipes, setRandomRecipes] = useState([])

    //Search results from input

    const loadSearchResults = async() => {

            const results = await spoonacularApi.getIngredientRecipes(ingredientsList)
            setSearchResults(results)
        }

    //Random recipes as placeholder when no ingredient/s is inputted

    const loadRandomRecipes = async() => {
        const results = await spoonacularApi.getRandomRecipes()
        console.log('loadRandomRecipes', results)
        setSearchResults(results)
    }

    useEffect(() => {
        if (ingredientsList.length >= 1) {
            loadSearchResults()    
        }

        if (ingredientsList.length === 0) {  //load random recipes if no input or all tags/ingredient input is deleted
            loadRandomRecipes()
        }

    }, [ingredientsList])


    return(
        <div className="search-page">
            <InputItem ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
            <div className="ingredient-tags-container">
                {ingredientsList.map((ingredient, i) => <Tag key={i} ingredient={ingredient} ingredientsList={ingredientsList} setIngredientsList={setIngredientsList}/>)}
            </div>
            {/* <div className="random-recipes">
                {randomRecipes.map((randomRecipe, index) => <RandomRecipes key={index} randomRecipe={randomRecipe} />)}
            </div> */}
            <div className="recipe-card-container">
                {searchResults.map((searchResult, index) => <RecipeCard key={index} recipe={searchResult} />)}
            </div>
        </div>
    )
}
