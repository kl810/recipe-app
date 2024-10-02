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
                    <img className="d-block w-100 background" src={imageOne} alt="fresh produce"/>
                    <Carousel.Caption>
                        <h3 className="home-title">Save Money and Reduce Food Waste</h3>
                        <p className="home-sub">Be a Food Waste Warrior and turn your pantry ingredients into a delicious meal! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>   
                    <img className="d-block w-100 background" src={imageTwo} alt="compost"/>
                    <Carousel.Caption>
                        <h3 className="home-title">Don't know what to cook?</h3>
                        <p className="home-sub">Find 100s of recipes, filtered by products you have at home.</p>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="btn-wrapper">
                <button className="btn-search">
                    <Link to={routes.search} className="text-link">Let's get cookin'!</Link>
                    <span className="home-icon"><i className="fa-solid fa-kitchen-set"></i></span>
                </button>
            </div>
        </div>

    )
}

export default HomepageCarousel;