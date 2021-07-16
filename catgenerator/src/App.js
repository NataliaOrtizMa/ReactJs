import React from 'react';
import './App.css';
import Cats from './components/Cats';
import { useInput } from './hooks/hooks';

export default function App() {
    const [searchColor, setSearchColor] = useInput("black");
    const [searchPhrase, setSearchPhrase] = useInput("Good Luck");

    const submit = e => {
        e.preventDefault();
        // Cats(searchColor.value, searchPhrase.value)
        // setSearchColor();
        // setSearchPhrase();
    }

    return (
        <>
        <form onSubmit={submit}>
            <input type="text" placeholder="Color" {...searchColor} required></input>
            <input type="text" placeholder="Text" {...searchPhrase} required></input>
            <button>Buscar</button>
        </form>
        <Cats color={searchColor.value} text={searchPhrase.value} />
        </>
    )
}