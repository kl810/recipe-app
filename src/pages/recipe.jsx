import RecipeInstructions from "../components/recipe-instructions/recipe-instructions"
import spoonacularApi from "../api/spoonacular-api";
import { useState, useEffect } from "react";
import {useParams } from 'react-router-dom';


export default function RecipePage() {
    const { recipeId } = useParams();
    const [info, setInfo] = useState({});


    const loadRecipeInfo = async() => {

        const getInfo = await spoonacularApi.getRecipeInfo(recipeId)

        // const getAnalyzedInstructions = getInfo.analyzedInstructions[0].steps[0]

        // console.log('getInfo', getInfo)
        // console.log('getInfo.extendedIngredients[0].original', getInfo.extendedIngredients[0].original)
        // console.log('getInfo.analyzedInstructions', getInfo.analyzedInstructions)
        // console.log('getAnalyzedInstructions.number+step', getAnalyzedInstructions.number, " ", getAnalyzedInstructions.step)

        setInfo(getInfo)
        
    }
    

    useEffect(() => {
        loadRecipeInfo()

    }, [recipeId])
    
    // console.log("title", info && info.title)
    // console.log("ingredients", info && info.extendedIngredients)
    // // console.log("original", info.extendedIngredients.original)

    // const recipeIngredients = info && info.extendedIngredients.map((ingredient) => ingredient.original)

    // console.log('recipeingredient', recipeIngredients)

    return  (
        Object.keys(info).length && <RecipeInstructions info={info}/> //check if object is empty
    )
}