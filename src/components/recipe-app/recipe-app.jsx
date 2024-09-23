import { useState, useEffect } from "react";
import TopNav from "../top-nav/top-nav";
import InputItem from "../input/input";
import Tag from "../tag/tag";
import SearchResults from "../search-results/search-results";
import { getIngredientRecipes} from "../../api/spoonacular-api/mock";


export default function RecipeApp() {

    const [ingredientsList, setIngredientsList] = useState([])

    

    // const loadSearchResults = async() => {
    //         const results = await getIngredientRecipes(ingredientsList)
    //         setIngredientsList(results)

    //     }

    // useEffect(() => {
        

    //     loadSearchResults()

    // }, [ingredientsList])

    // console.log("testing" + ingredientsList)

    return(
        <>
            <TopNav />
            <InputItem ingredientsList={ingredientsList} setIngredientsList={setIngredientsList} />
            <div className="ingredient-tags-container">
                {ingredientsList.map((ingredient, i) => <Tag key={i} ingredient={ingredient}/>)}
            </div>
            
            {/* <SearchResults title={ingredient.title} image={ingredient.image} />
            <SearchResults title={ingredient.title} image={ingredient.image} />
            <SearchResults title={ingredient.title} image={ingredient.image} /> */}
        </>
    )
}
