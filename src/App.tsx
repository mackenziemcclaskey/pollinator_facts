import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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

const FactPage = ({ match }: { match: any }) => {
    const factIndex = parseInt(match.params.id, 10);
    const fact = beeFacts[factIndex];

    return (
        <div className="App">
            <header className="App-header">
                <h1>Bee Facts</h1>
                <p>{fact}</p>
                <Link to="/">Go back</Link>
            </header>
        </div>
    );
};

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <div className="App">
                        <header className="App-header">
                            <h1>Bee Facts</h1>
                            <ul>
                                {beeFacts.map((fact, index) => (
                                    <li key={index}>
                                        <Link to={`/fact/${index}`}>{fact}</Link>
                                    </li>
                                ))}
                            </ul>
                        </header>
                    </div>
                </Route>
                <Route path="/fact/:id" component={FactPage} />
            </Switch>
        </Router>
    );
}

export default App;