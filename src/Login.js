import * as React from 'react';
import { connect } from 'react-redux';
import { login } from './Actions';

const mapStateToProps = (state) => {
    return {
        loginMessage: state.listReducer.loginMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login())
    }
}

const LoginComponent = (props) => {
    return (
        <span>
            <button className="btn btn-outline-primary" onClick={props.login}>Login</button>   
            <span className="ml-3">{props.loginMessage}</span>
        </span>
    )
}

export const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);