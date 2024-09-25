import './homepage-carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import imageOne from "../../images/background-image-1.jpg";
import imageTwo from "../../images/background-image-2.jpg";

import { Link } from 'react-router-dom';
import routes from '../../routes';


function HomepageCarousel() {

    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item interval={1500}>   
                    <img className="d-block w-100" src={imageOne} alt="fresh produce"/>
                    <Carousel.Caption>
                        <h3>Save Money and Reduce Food Waste</h3>
                        <p>Be a Food Waste Warrior and turn your pantry ingredients into a delicious meal! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>   
                    <img className="d-block w-100" src={imageTwo} alt="compost"/>
                    <Carousel.Caption>
                        <h3>Don't know what to cook?</h3>
                        <p>Find 100s of recipes, filtered by products you have at home.</p>
                        <button>
                            <Link to={`/recipe-app`} className="text-link">Let's get cookin'!</Link>
                            <span className="icon"><i class="fa-solid fa-kitchen-set"></i></span>
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}

export default HomepageCarousel;