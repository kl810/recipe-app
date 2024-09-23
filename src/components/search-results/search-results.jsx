import './search-results.css';
import Card from 'react-bootstrap/Card';


function SearchResults({title, image}) {
    

    return(
        <Card style={{ width: '18rem' }} className="card-results">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body className="card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SearchResults;