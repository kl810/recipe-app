import './top-nav.css';
import routes from '../../routes';

function TopNav() {

    return(
        <div className="topnav">
            <a className="active" href={routes.home}>
                <span className="material-symbols-outlined">kitchen</span>
                Food Waste Warrior
            </a>

        </div>
    )

}

export default TopNav;