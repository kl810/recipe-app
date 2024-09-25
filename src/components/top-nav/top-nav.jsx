import './top-nav.css';
import routes from '../../routes';

function TopNav() {

    return(
        <div className="topnav">
            <a className="active" href={routes.home}>
                <span className="material-symbols-outlined">kitchen</span>
                What's cookin'?
            </a>

        </div>
    )

}

export default TopNav;