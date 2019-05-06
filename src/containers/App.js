import React from "react";

import { User } from "../components/User";
import { Main } from "../components/Main";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Sara"
        }
    }

    setName = () => {
        this.setState({ name: "Nouf Alzoman" })
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.setName} />
                <User username={this.state.name} />
            </div>
        );
    }
}


export default App;
