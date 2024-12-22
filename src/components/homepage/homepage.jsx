import './homepage.css';
import { Link } from 'react-router-dom';
import routes from '../../routes';


function Homepage() {
    return (
        <div className="homepage-container">
            <div className="home-text">
                <h3 className="home-title">Save Money and Reduce Food Waste</h3>
                <p className="home-sub">Be a Food Waste Warrior and turn your pantry ingredients into a delicious meal! </p>
                <div className="btn-wrapper">
                    <button className="btn-search">
                        <Link to={routes.search} className="text-link">Let's get cookin'!</Link>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Homepage;
