import React, { useState } from 'react'
import "./AddInputs.css";

const AddInputs = ({ inputs, handleAddInput, handleChange, handleDeleteInput }) => {

    

    return (
        <div className="container">
            {inputs.map((item, index) => (
                <div className="input_container" key={index}>
                    <label htmlFor="count">Количество:</label>
                    <input
                        id='count'
                        name="count"
                        type="number"
                        value={item.count}
                        onChange={(event) => handleChange(event, index)}
                    />
                    <label htmlFor="ingredient">Ингредиент:</label>
                    <input
                        id='ingredient'
                        name="ingredient"
                        type="number"
                        value={item.ingredient}
                        onChange={(event) => handleChange(event, index)}
                    />
                    {inputs.length > 1 && (
                        <button onClick={() => handleDeleteInput(index)}>Delete</button>
                    )}
                    {index === inputs.length - 1 && (
                        <button onClick={() => handleAddInput()}>Add</button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default AddInputs