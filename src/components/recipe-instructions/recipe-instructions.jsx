import './recipe-instructions.css';
import { Container, Row, Col } from 'react-bootstrap';

function RecipeInstructions({info}) {

    return(
        <>
            <div className="d-flex justify-content-center align-items-center"> 
                <img className="banner-img" src={info.image} alt="recipe image"/>
                {/* <img /> */}
            </div>
            <div className="recipe-text">
                <Container fluid>
                    <Row>
                        <Col className="col-4 info">
                            <h1 className="title">{info.title}</h1>
                            <hr className="line"></hr>
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
                            <Row className="ingredients">
                                <h2>INGREDIENTS</h2>
                                {/* <p>{info && info.extendedIngredients[0].original}</p> */}
                                <p>100ml of milk</p>
                                <p>50g of butter</p>
                                <p>3 eggs</p>
                                <p>2 tsp baking soda</p>
                            </Row> 
                            <Row className="d-flex justify-content-center align-items-center notes">
                                    <p>NOTES: <br />
                                        Allergens: peanuts, dairy, eggs
                                    </p>
                            </Row>
                        </Col>
                        <Col className="Col-8 directions">
                            <h2>DIRECTIONS</h2>
                            <p>
                                1. Preheat the oven to 180C/160C Fan/Gas 4 and grease and line a 900g/2lb loaf tin with baking parchment or use a loaf tin liner. <br />

                                2. Peel the bananas and mash with a fork. Tip into a large mixing bowl and add the eggs, sugar and oil. Use a fork or whisk to combine. <br />

                                3. Add the flour, spice and baking powder and whisk together until thoroughly combined. Pour into the prepared tin. Bake for 40 minutes, or until the cake is well risen and a skewer inserted into the centre comes out clean. <br />

                                4. Cool in the tin for 10 minutes, then turn out onto a wire rack. Serve warm or cold in slices. Spread with butter if you like.
                            </p>
                        </Col>
                    </Row>
                </Container>                
            </div>
            
        </>
        
    )
}

export default RecipeInstructions;