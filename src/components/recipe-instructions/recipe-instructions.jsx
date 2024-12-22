import './recipe-instructions.css';
import { Container, Row, Col } from 'react-bootstrap';

function RecipeInstructions({info}) {
    // console.log("recipeinstructions - info", " ", info)

    const recipeIngredients = info.extendedIngredients.map(
        (ingredient, i) => (
            <li key={i} className="list">
                {ingredient.original}
            </li>
        )
    );

    const recipeInstructions = info.analyzedInstructions[0].steps.map(
        (steps, i) => (
            <li key={i} className="steps">
                <span className="step-num">{steps.number}.</span>
                <span className="step">{steps.step}</span>
                <br></br>
            </li>
        )
    )

    console.log(recipeInstructions)

    return(
        <div className="recipe-instructions">
            <div className="recipe-text">
                <Container fluid>
                    <Row>
                        <Col className="col-12 col-lg-4 info-left info-top">
                            <Row>
                                <h1 className="title">{info.title}</h1>
                                <hr className="line"></hr>
                            </Row>
                            <Row>
                                <Col className="info-col">
                                    <span><i className="fa-solid fa-utensils info-icon"></i></span> 
                                    <p className="prep">{info.servings} servings</p>
                                </Col>
                                <Col className="info-col">
                                    <span><i className="fa-regular fa-clock info-icon"></i></span>
                                    <p className="prep">{info.readyInMinutes} minutes</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='col-12 col-lg-7 info-right info-top'>
                            <div style={
                                {
                                    display: 'flex', 
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100%'
                                }
                            }>
                                <div 
                                    className="recipe-img" 
                                    style={{
                                        backgroundImage: `url(${info.image})`
                                    }} 
                                    alt="recipe">
                                </div>

                            </div>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col className="col-12 col-lg-4 info-left ingredients">
                            <h2>INGREDIENTS</h2>
                            <ul className="list-style">
                                {recipeIngredients}
                            </ul>
                        </Col>
                        <Col className="col-12 col-lg-7 info-right directions">
                            <h2>DIRECTIONS</h2>
                            <ul className="list-style">
                                {recipeInstructions}
                            </ul>
                        </Col>
                    </Row>
                </Container>                
            </div>
            
        </div>
        
    )
}

export default RecipeInstructions;