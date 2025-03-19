import React, { useState, useEffect } from 'react';
import './App.css';

const beeFacts = [
    "Bees are found on every continent except Antarctica.",
    "There are over 20,000 species of bees.",
    "Bees can fly up to 15 miles per hour.",
    "A single bee can visit up to 5,000 flowers in a day.",
    "Bees communicate through a series of dance moves.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "Bees are the only insect that produces food eaten by humans.",
    "A bee's wings beat 190 times a second, or about 11,400 times a minute.",
    "Bees have five eyes.",
    "Honey bees can recognize human faces."
];

function App() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        // Set a random fact on initial render
        setFact(beeFacts[Math.floor(Math.random() * beeFacts.length)]);
    }, []);

    const getRandomFact = () => {
        setFact(beeFacts[Math.floor(Math.random() * beeFacts.length)]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bee Facts</h1>
                <p>{fact}</p>
                <button onClick={getRandomFact}>New Fact</button>
            </header>
        </div>
    );
}

export default App;