import './input.css'

function InputItem() {
    return(
        <form>
            <div className="input-wrapper">
                <input type="text" placeholder="search..."/>
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            
            
        </form>
    )
}

export default InputItem;