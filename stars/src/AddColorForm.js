import React, { useState } from 'react';
import { UseColors } from './ColorProvider';

export default function AddColorForm() {
    const {addColor} = UseColors();
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("000000");

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }
    return(
        <form onSubmit={submit}>
            <input {...titleProps} type="text" placeholder="Título del color" required></input>
            <input {...colorProps} type="color" required></input>
            <button>Add</button>
        </form>
    )   
}

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    return [
        {value, onChange: event => setValue(event.target.value)},
        () => setValue(initialValue)
    ];
};

