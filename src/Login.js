import * as React from 'react';
import { connect } from 'react-redux';
import FirebaseConnection from './FirebaseUtilities';

const mapStateToProps = (state) => {
    return {
        loginMessage: state.listReducer.loginMessage
    }
}

class LoginComponent extends React.Component {
    render() {
        return (
            <span>
                <button className="btn btn-outline-primary" onClick={FirebaseConnection.loginFirebaseUser}>Login</button>   
                <span className="ml-3">{this.props.loginMessage}</span>
            </span>
        );
    };
};

export const Login = connect(
    mapStateToProps
)(LoginComponent);