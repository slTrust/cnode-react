import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import {BrowserRouter as Router, Route} from "react-router-dom";

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </div>
        </Router>

    );
}

export default App;
