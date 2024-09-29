import './search.css'
import { useState, useEffect } from "react";
import InputItem from "../../components/input/input";
import Tag from "../../components/tag/tag";
import RecipeCard from "../../components/recipe-card/recipe-card";
import spoonacularApi from "../../api/spoonacular-api";


export default function SearchPage() {

    const [ingredientsList, setIngredientsList] = useState([])

    const [searchResults, setSearchResults] = useState([])

    const loadSearchResults = async() => {

            const results = await spoonacularApi.getIngredientRecipes(ingredientsList)
            console.log(results)
            setSearchResults(results)
        }

    useEffect(() => {
        if (ingredientsList.length >= 1) {
            loadSearchResults()    
        }

        if (ingredientsList.length === 0) {  //Clear search results if all tags/ingredient input is deleted
            setSearchResults([])
        }

    }, [ingredientsList])


    return(
        <div className="search-page">
            <InputItem ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
            <div className="ingredient-tags-container">
                {ingredientsList.map((ingredient, i) => <Tag key={i} ingredient={ingredient} ingredientsList={ingredientsList} setIngredientsList={setIngredientsList}/>)}
            </div>
            <div className="recipe-card-container">
                {searchResults.map((searchResult, index) => <RecipeCard key={index} recipe={searchResult} />)}
            </div>
        </div>
    )
}
