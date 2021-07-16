import React from 'react';
import './App.css';
import Cats from './Cats';
import { useInput } from './hooks';

export default function App() {
    const [searchColor, setSearchColor] = useInput("black");
    const [searchPhrase, setSearchPhrase] = useInput("Good Luck");

    const submit = e => {
        e.preventDefault();
        // Cats(searchColor.value, searchPhrase.value)
        setSearchColor();
        setSearchPhrase();
    }

    return (
        <form onSubmit={submit}>
            <input type="text" placeholder="Artist" {...searchColor} required></input>
            <input type="text" placeholder="Song Name" {...searchPhrase} required></input>
            <button>Buscar</button>
            {/* <Cats color={searchColor.value} text={searchPhrase.value} /> */}
        </form>
    )
}