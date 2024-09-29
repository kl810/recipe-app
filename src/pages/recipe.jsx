import RecipeInstructions from "../components/recipe-instructions/recipe-instructions"
import spoonacularApi from "../api/spoonacular-api";
import { useState, useEffect } from "react";
import {useParams } from 'react-router-dom';


export default function RecipePage() {

    const { recipeId } = useParams();
    const [info, setInfo] = useState({});


    const loadRecipeInfo = async() => {

        const getInfo = await spoonacularApi.getRecipeTitle(recipeId)

        console.log('getInfo', getInfo)
    
        setInfo(getInfo)
        
    }
    

    useEffect(() => {
        loadRecipeInfo()

    }, [recipeId])
    
    // console.log("title", info && info.title)
    // console.log("ingredients", info && info.extendedIngredients)
    // // console.log("original", info.extendedIngredients.original)

    // const recipeIngredients = info.extendedIngredients.map((ingredient) => ingredient.original)

    // console.log('recipeingredient', recipeIngredients)

    return  (
        <RecipeInstructions info={info}/>
    )
}