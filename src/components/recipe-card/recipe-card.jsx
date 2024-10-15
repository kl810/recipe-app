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
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body className="card-body">
                <Card.Title>{recipe.title}</Card.Title>
            </Card.Body>
        </Card>

    )
}

export default RecipeCard;


//number of likes
// const [like, setLike] = useState(false)

// function handleClickLike(event) {
//     setLike(!like);
// }

//replaced Button component with making the entire Card component an onClick function

    {/* <Card.Text><button class="material-symbols-outlined">favorite</button>{recipe.likes}</Card.Text> */}
    {/* <Button variant="primary" className="button">
        <Link to={`/recipes/${recipe.id}`} className="text-link">Click for Recipe</Link>
    </Button> */}