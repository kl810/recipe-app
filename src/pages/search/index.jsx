import './search.css'
import InputItem from "../../components/input/input";
import Tag from "../../components/tag/tag";
import RecipeCard from "../../components/recipe-card/recipe-card";
import { useContext } from 'react'
import {AppContext} from '../../App'

export default function SearchPage() {
    const {ingredientsList, searchResults} = useContext(AppContext);

    return(
        <div className="search-page">
            <div className="search-header">
                <InputItem />
                <div className="ingredient-tags-container">
                    {ingredientsList.map((ingredient, i) => <Tag key={i} ingredient={ingredient}/>)}
                </div>
            </div>

            <h1 className="discover-heading">Discover new recipes...</h1>
            <div className="recipe-card-container">
                {searchResults.map((searchResult, index) => <RecipeCard key={index} recipe={searchResult} />)}
            </div>
        </div>
    )
}
