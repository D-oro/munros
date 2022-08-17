import React from 'react';

const MunroSelector = ({munros, onMunroSelected}) => {

    const munroOptions = munros.map((munro, index) => {
        return <option value={index} key={index}>{munro.name}</option>
    })

    const handleChange =(event) => {
        const chosenMunro = munros[event.target.value];
        onMunroSelected(chosenMunro);
    }

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Munro</option>
            {munroOptions}
        </select>
    )
}

export default MunroSelector;