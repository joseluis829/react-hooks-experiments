import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Example1 } from "./Components/Basic/Example1";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Example1 />
            </div>
        );
    }
}

export default App;
