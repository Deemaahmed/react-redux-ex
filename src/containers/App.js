import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
import { setName } from "../actions/userActions";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={this.props.setName}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

//Wires up the state from the reducers
const mapStateToProps = (state) => {
  return {
      user: state.user,
      math: state.math
  };
};

// Wires up the actions to the component - the 'dispatch' argument is needed
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

// Or simply pass {setName} object instead of mapDispatchToProps function
export default connect(mapStateToProps, mapDispatchToProps)(App);
