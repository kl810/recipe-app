import './random-recipes.css';
import fallbackImage from '../../images/landscape-placeholder-svgrepo-com.png'


function RandomRecipes({randomRecipe}){

    return (
        <>
            <div className="random-recipes">
                <div className="random-recipe">
                    <p className="recipe-title">
                        {randomRecipe && randomRecipe.title}
                    </p>
                    <img className="random-recipe-img" src={randomRecipe.image ? randomRecipe.image : fallbackImage} alt="recipe"/>
                </div>
            </div>
        </>
    ) 

}

export default RandomRecipes;