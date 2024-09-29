import './recipe-card.css';
import { Card, Button } from 'react-bootstrap';
import routes from '../../routes';
import { Link } from 'react-router-dom';


function RecipeCard({recipe}) {
    

    return(
        <Card className="card">
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body className="card-body">
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                Recipe Description
                </Card.Text>
                <Button variant="primary" className="button">
                    <Link to={`/recipes/${recipe.id}`} className="text-link">Click for Recipe</Link>
                </Button>
            </Card.Body>
        </Card>

    )
}

export default RecipeCard;