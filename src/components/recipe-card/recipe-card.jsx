import './recipe-card.css';
import { Card, Button, Container, CardGroup } from 'react-bootstrap';


function RecipeCard({recipe}) {
    

    return(
        <Card className="card">
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body className="card-body">
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                Recipe Description
                </Card.Text>
                <Button variant="primary" className="button">Click for recipe</Button>
            </Card.Body>
        </Card>

    )
}

export default RecipeCard;