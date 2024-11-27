import './recipe-card.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function RecipeCard({recipe}) {

    const navigate = useNavigate()

    function handleClickRecipe() {
        // console.log("click", `/recipes/${recipe.id}`)
        return navigate(`/recipes/${recipe.id}`)
    }
    

    return(
        <Card onClick={handleClickRecipe} className="custom-card">
            <Card.Img variant="top" src={recipe.image || "src/images/landscape-placeholder-svgrepo-com.png"} className="card-img"/>
            <Card.Body className="card-body">
                <Card.Title>{recipe.title}</Card.Title>
            </Card.Body>
        </Card>

    )
}

export default RecipeCard;
