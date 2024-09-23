import './tag.css'

function Tag({ingredient}) {

    const handleDelete = (event) => {
        event.preventDefault();
        const ingredientList = [...ingredient]
    }
    
    return (
        <div className="tag-item">
            <span className="text">{ingredient}</span>
            <span><button className="close">&times;</button></span>
        </div>
    )

}

export default Tag