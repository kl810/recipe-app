import './input.css'

function InputItem({ingredient, setIngredient}) {

    function handleInputChange(e) {
        setIngredient(e.target.value)
        console.log(e.target.value)
    }
    return(
        <form>
            <div className="input-wrapper">
                <input 
                    type="text" 
                    placeholder="what's in your fridge?" 
                    value={ingredient}
                    onChange={handleInputChange}
                />
                <button 
                    type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    )
}

export default InputItem;