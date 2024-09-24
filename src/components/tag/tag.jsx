import './tag.css'

function Tag({ingredient, ingredientsList, setIngredientsList}) {

    const handleDelete = (event) => {
        event.preventDefault();

        //Create shallow copy
        const listCopy = [...ingredientsList]

        //use filter to remove tag from list
        const filteredList = listCopy.filter((tag) => tag !== ingredient)

        //set new list
        setIngredientsList(filteredList)
    }
    
    return (
        <div className="tag-item">
            <span className="text">
                {ingredient}
            </span>
            <span>
                <button 
                    className="close"
                    onClick={handleDelete}
                >
                        &times;
                </button>
            </span>
        </div>
    )

}

export default Tag