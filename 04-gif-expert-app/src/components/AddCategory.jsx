import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length <= 1) {
            return;
        }

        onNewCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form aria-label="" onSubmit={onSubmit}>
            <input type="text" placeholder="Bucar GIFs" value={inputValue} onChange={onInputChange} />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
