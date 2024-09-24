import './input.css'
import { useRef} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap';

function InputItem({ingredientsList, setIngredientsList}) {

    const inputIngredient = useRef(null)

    const onSubmit = (e) => {
        // e.preventDefault()
        
        const submitIngredients = [...ingredientsList, inputIngredient.current.value]
        
        setIngredientsList(submitIngredients)
        inputIngredient.current.value=""
    }

    
    return(
        <> 
            {/* React bootstrap */}
            <InputGroup id="input-group">
                <Form.Control
                    ref={inputIngredient}
                    name="input-ingredient"
                    placeholder="What's in your pantry?"
                    aria-label="input-ingredient"
                    aria-describedby="basic-addon2"
                    type="text"
                    onKeyDown={(e) => { 
                        if (e.key === "Enter") { 
                            onSubmit(); 
                        } 
                    }}  
                />
                <Button 
                    variant="outline-secondary" 
                    id="button-addon2" 
                    type="submit"
                    onClick={onSubmit}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
            </InputGroup>


        </>
        // html bootstrap
        // <form>
        //     <div className="input-wrapper">
        //         <input 
        //             ref={searchInput}
        //             type="text" 
        //             placeholder="what's in your pantry?" 
        //             onChange={handleInputChange}
        //             onKeyDown={(e) => { 
        //                 if (e.key === "Enter") { 
        //                     submitItem(); 
        //                 }
        //             }} 
        //         />
        //         <button 
        //             type="submit"
        //             onClick={submitItem}
        //         >
        //             <i className="fa-solid fa-magnifying-glass"></i>
        //         </button>
        //     </div>
        // </form>
    )
}

export default InputItem;