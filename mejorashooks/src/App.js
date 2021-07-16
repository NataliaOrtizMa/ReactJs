import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App() {

    return(
        <>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </div>

                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/gallery"><Gallery /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </Router>

            <footer>
                Pequeño footer
            </footer>
        </>
    );
}
