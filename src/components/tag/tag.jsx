import './tag.css';
import { useContext } from 'react';
import {AppContext} from '../../App';

function Tag({ingredient}) {
    const {deleteIngredient} = useContext(AppContext);

    const handleDelete = (event) => {
        event.preventDefault();

        deleteIngredient(ingredient);

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