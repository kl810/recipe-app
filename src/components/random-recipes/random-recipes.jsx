import './random-recipes.css';

function RandomRecipes({randomRecipe}){

    return (
        <>
            <div className="random-recipes">
                <div className="random-recipe">
                    <p className="recipe-title">
                        {randomRecipe && randomRecipe.title}
                    </p>
                    <img className="random-recipe-img" src={randomRecipe && randomRecipe.image} alt="random recipe"/>
                </div>
            </div>
        </>
    )

}

export default RandomRecipes;