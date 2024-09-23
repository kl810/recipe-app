import './top-nav.css'

function TopNav() {

    return(
        <div className="topnav">
            <a className="active" href="#home">
                <span className="material-symbols-outlined">kitchen</span>
                What's in my fridge?
            </a>

        </div>
    )

}

export default TopNav;