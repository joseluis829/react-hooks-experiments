import React, { Component } from "react";
import "./App.css";
import { Example1 } from "./Components/Basic/Example1";
import Report from "./Features/Report";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Example1 />*/}
                <Report />
            </div>
        );
    }
}

export default App;
