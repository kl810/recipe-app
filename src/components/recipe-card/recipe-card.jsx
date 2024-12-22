import './recipe-card.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import fallbackImage from '../../images/landscape-placeholder-svgrepo-com.png'

function RecipeCard({recipe}) {

    const navigate = useNavigate()

    function handleClickRecipe() {
        // console.log("click", `/recipes/${recipe.id}`)
        return navigate(`/recipes/${recipe.id}`)
    }
    

    return(
        <Card onClick={handleClickRecipe} className="custom-card">
            {/* <Card.Img variant="top" src={recipe.image ? recipe.image : fallbackImage} className="card-img"/> */}
            <div className='card-img-container'>
                <div
                className='card-img' 
                style={{
                    backgroundImage: `url(${recipe.image ? recipe.image : fallbackImage})`
                }}></div>
            </div>
            <Card.Body className="card-body">
                <Card.Title>{recipe.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;
