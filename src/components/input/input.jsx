import './input.css'
import { useRef, useContext} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap';
import {AppContext} from '../../App'

function InputItem() {
    const {addIngredient} = useContext(AppContext);

    const inputIngredient = useRef(null)

    const onSubmit = (e) => {
        // e.preventDefault()
        
        addIngredient(inputIngredient.current.value) 
        
        inputIngredient.current.value=""
    }

    
    return(
        <> 
            <InputGroup id="input-group">
                <Form.Control
                    ref={inputIngredient}
                    name="input-ingredient"
                    placeholder="What's in your pantry?"
                    aria-label="input-ingredient"
                    type="text"
                    onKeyDown={(e) => { 
                        if (e.key === "Enter") { 
                            onSubmit(); 
                        } 
                    }}  
                />
                <Button 
                    className="search-btn"
                    type="submit"
                    onClick={onSubmit}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
            </InputGroup>

        </>
    )
}

export default InputItem;